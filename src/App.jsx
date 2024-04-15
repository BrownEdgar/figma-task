import React from "react";
import "./App.scss";
import FooterGroup from "./components/Footer/FooterReGroup/FooterGroup";
import Application from './components/Application/Application';
import NextLove from './components/NextLove/NextLove'

export default function App() {
  return (
    <div className="App">
      <NextLove />
      <Application />
      <FooterGroup />
    </div>
  )
}
