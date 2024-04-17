import React from "react";
import "./App.scss";
import FooterGroup from "./components/Footer/FooterReGroup/FooterGroup";
import Application from './components/Application/Application';
import NextLove from './components/NextLove/NextLove'
import ControlPart from './components/ControlPart/ControlPart'
import JoinPart from './components/JoinPart/JoinPart'

export default function App() {
  return (
    <div className="App">
      <NextLove />
      <ControlPart />
      <JoinPart />
      <Application />
      <FooterGroup />
    </div>
  )
}
