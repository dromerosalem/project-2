import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import Home from './components/Home'
import PastLaunches from './components/PastLaunches'
import UpcomingLaunches from './components/UpcomingLaunches'
import SingleLaunch from './components/SingleLaunch'
import WeatherMars from './components/WeatherMars'
import NavBar from './components/NavBar'

const App = () => (
  <BrowserRouter basename="/project-2">
    <NavBar />
    <Switch>
      {/* <Route exact path='/WeatherMars' component={WeatherMars}/> */}
      <Route exact path="/past" component={PastLaunches} />
      <Route exact path="/upcoming" component={UpcomingLaunches} />
      <Route exact path="/" component={Home} />
      <Route path="/:flightNumber" component={SingleLaunch} />
    </Switch>
  </BrowserRouter>
)



ReactDOM.render(
  <App />,
  document.getElementById('root')
)