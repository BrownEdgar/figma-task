import React from 'react'
import './App.scss'
import ControlPart from './components/ControlPart/ControlPart'
import JoinPart from './components/JoinPart/JoinPart'

export default function App() {
  return (
    <div className='App'>
      <ControlPart />
      <JoinPart />
    </div>
  )
}
