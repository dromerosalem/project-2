import React from 'react'
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
    
    return <>
      <div className="single-background">
        <div className="single-launch-body">
          <div className="single-launch-info">
            <h2>Flight number: {flight_number}</h2>
            <h2>Mission name: {mission_name}</h2>
            <h2>Launch date: {launch_date_utc}</h2>
            <h2>Rocket name: {rocket.rocket_name}</h2>
            <div>Nationality: {rocket.second_stage.payloads.map((element) => {
              return element.nationality
            })}</div>
            <div>Manufacturer: {rocket.second_stage.payloads.map((element) => {
              return element.manufacturer
            })}</div>
            <div>Payload type: {rocket.second_stage.payloads.map((element) => {
              return element.payload_type
            })}</div>
            <div>Regime: {rocket.second_stage.payloads.map((element) => {
              return element.orbit_params.regime
            })}</div>
            <h2>Launch site: {launch_site.site_name_long}</h2>
            <img className="single-patch-picture" src={!links.mission_patch_small ? '../images/spacexlogo.png' : links.mission_patch_small} />
            <div>{details}</div>
          </div>
          <div className="rocket-picture-container">
            <img className="rocket-picture" src={rocket.rocket_name === 'Falcon 1' ? '../images/falcon1.png' : rocket.rocket_name === 'Falcon 9' ? '../images/falcon9.png' : rocket.rocket_name === 'Falcon Heavy' ? '../images/falconheavy.png' : links.mission_patch_small} />
          </div>
        </div>
      </div>
    </>
  }
}

export default SingleLaunch