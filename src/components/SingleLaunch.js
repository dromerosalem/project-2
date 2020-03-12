import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class SingleLaunch extends React.Component {

  constructor() {
    super()
    this.state = {
      launch: {

        rocket: {
          second_stage: {
            payloads: []
          }
        },
        launch_site: {},
        links: {}
      }
    }
  }

  componentDidMount() {
    const flightNumber = this.props.match.params.flightNumber
    axios.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`)
      .then(res => this.setState({ launch: res.data }))
  }

  render() {
    const { flight_number, mission_name, launch_date_utc, rocket, launch_site, links, details } = this.state.launch
    // const betterLaunchDateArray = this.state.launch_date_utc.split('')
    // const betterLaunchDate = []
    // for (let i = 0; i < 10; i++) {
    //   betterLaunchDate.push[betterLaunchDateArray[i]]
    // }
    // const joinedBetterLaunchDate = betterLaunchDate.join('')

    return <>
      <h2>{flight_number}</h2>
      <h2>{mission_name}</h2>
      <h2>{launch_date_utc}</h2>
      <h2>{rocket.rocket_name}</h2>
      <div>{rocket.second_stage.payloads.map((element) => {
        return element.nationality
      })}</div>
      <div>{rocket.second_stage.payloads.map((element) => {
        return element.manufacturer
      })}</div>
      <div>{rocket.second_stage.payloads.map((element) => {
        return element.payload_type
      })}</div>
      <div>{rocket.second_stage.payloads.map((element) => {
        return element.orbit_params.regime
      })}</div>
      <h2>{launch_site.site_name_long}</h2>
      <img src={!links.mission_patch_small ? '../images/spacexlogo.png' : links.mission_patch_small} />
      <div>{details}</div>
      <img src={ rocket.rocket_name === 'Falcon 1' ? '../images/falcon1.png' : rocket.rocket_name === 'Falcon 9' ? '../images/falcon9.png' : rocket.rocket_name === 'Falcon Heavy' ? '../images/falconheavy.png' : links.mission_patch_small} />
    </>
  }
}

export default SingleLaunch