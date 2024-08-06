import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matches from './components/matches/Matches'
import Login from './components/login/Login'
import Teams from './components/teams/Teams'
import Rounds from './components/rounds/Rounds'
import Zones from './components/zones/Zones'

function App() {


  return (
    <>
      <div>
          {/* <Matches /> */}
          {/* <Login /> */}
          {/* <Teams /> */}
          {/* <Rounds /> */}
          <Zones/>
      </div>
    </>
  )
}

export default App
