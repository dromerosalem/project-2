import React from 'react'
import ReactDOM from 'react-dom'
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
      <div key={i}>
        <Link to={`/${e.flight_number}`}>
          <h2>{e.mission_name}</h2>
          <h2>{e.launch_year}</h2>
          <img src={e.links.mission_patch_small} />
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

export default PastLaunches