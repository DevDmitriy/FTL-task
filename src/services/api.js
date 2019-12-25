import {weelsMock} from '../fixtures/weels'

export const api = {
  rides: {
    get: () => {
      return fetch('https://api.listnride.com/v2/rides/13037')
        .then(res => res.json())
    },
    getMock: async () => {
      return weelsMock
    }
  }
}


