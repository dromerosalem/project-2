import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const Home = () => {
  return <>
    <div className="home-body">
      <h1>Welcome to Space!</h1>
      <div>
        <button><Link to={'/past'} style={{ color: 'black' }}>Click here to see past launches</Link></button>
        <button><Link to={'/upcoming'} style={{ color: 'black' }}>Click here to see upcoming launches</Link></button>
      </div>
      <h2>BECOMING A MULTIPLANET SPECIES</h2>
    </div>
  </>
}

export default Home