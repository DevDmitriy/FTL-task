import React, {Component} from 'react'
import {api} from '../services/api'

class Size extends Component {
  constructor(props) {
    super(props)
    this.state = {
      variations: [],
      selectedOption: {}
    }

  }

  componentDidMount() {
    api.rides.get()
      .then((res) => {
        this.setState({variations: filterFrames(res.cluster.variations)})
      })

    function filterFrames(framesArr) {
      let result = []
      framesArr.forEach((item) => {
        item.idOverlap = [item.id]
        let duplicate = result.filter((resultItem) => {
          return item.frameSize === resultItem.frameSize && item.size === resultItem.size
        })

        if (duplicate.length) {
          item.idOverlap.push(duplicate[0].id)
        }
        result.push(item);
      })
      return result;
    }

  }

  updateSize = (e) => {
    let selectedOption = this.state.variations[e.target.value]
    this.setState({selectedOption},
      () => console.log(this.state.selectedOption.idOverlap)
    )
  }

  render() {
    let variations = this.state.variations

    return (
      <div className="select-ride">
        <label htmlFor="selectRide">Pick a size</label>
        <select id="selectRide" onChange={this.updateSize}>
          {variations.map((option, selectedIndex) => (
            <option key={option.id}
                    value={selectedIndex}>
              {option.size} cm {option.frame_size}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default Size