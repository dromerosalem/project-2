import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

class WeatherMars extends React.Component {

  constructor() {
    super()
    this.state = null
  }

  render() {
 
    return <>
      <div className='weatherMars'>
         
        <iframe className='planitia' src='https://mars.nasa.gov/layout/embed/image/insightweather/'   scrolling='yes' frameBorder='0'></iframe>
      </div>
        
  
        
      
    </>
  }
}

export default WeatherMars