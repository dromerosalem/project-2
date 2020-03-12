import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UpcomingLaunches extends React.Component {

  constructor() {
    super()
    this.state = {
      upcomingLaunchesArray: []
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches/upcoming')
      .then(res => this.setState({ upcomingLaunchesArray: res.data }))
  }

  render() {
    const launchCard = this.state.upcomingLaunchesArray.map((e, i) => (
      <div key={i}>
        <Link to={`/${e.flight_number}`}>
          <h2>{e.mission_name}</h2>
          <h2>{e.launch_year}</h2>
          <img src={!e.links.mission_patch_small ? '../images/spacexlogo.png' : e.links.mission_patch_small} />
        </Link>
      </div>
    ))
    return <>
      <div>
        {launchCard}
      </div>
    </>
  }
}

export default UpcomingLaunches