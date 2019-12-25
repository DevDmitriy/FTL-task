import React, {Component} from 'react'
import {api} from '../../services/api'
import './size.css'
import {filterFrames, filterFramesReduce} from "../../utills/utills";

class Size extends Component {
  constructor(props) {
    super(props)
    this.state = {
      variations: [],
      selectedOption: {}
    }
  }

  componentDidMount() {
    api.rides.getMock()
      .then((res) => {
        this.setState({variations: filterFrames(res.cluster.variations)})
      })
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
        <select defaultValue={'default'} id="selectRide" onChange={this.updateSize}>
          <option value='default' disabled>Pick a size</option>
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