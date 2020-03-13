import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PastLaunches extends React.Component {

  constructor() {
    super()
    this.state = {
      pastLaunchesArray: []
    }
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches/past')
      .then(res => this.setState({ pastLaunchesArray: res.data }))
  }

  render() {
    const launchCard = this.state.pastLaunchesArray.map((e, i) => (
      <div className="each-card-past" key={i}>
        <Link to={`/${e.flight_number}`}>
          <h2>Mission name: {e.mission_name}</h2>
          <h2>Launch year: {e.launch_year}</h2>
          <img className="patch-picture" src={e.links.mission_patch_small} />
        </Link>
      </div>
    ))
    return <>
      <div className="past-background">
        <p className="past-introduction">
          Here you can explore all of SpaceX's past launches, from 2006 to the present! Scroll left and right to see all of them! Click on any launch to see additional information!
        </p>
        <div className="past-body">
          {launchCard}
        </div>
      </div>
    </>
  }
}

export default PastLaunches