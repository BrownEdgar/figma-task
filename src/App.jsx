import React from "react";
import "./App.scss";
import FooterGroup from "./components/Footer/FooterReGroup/FooterGroup";
import Application from './components/Application/Application';


export default function App() {
  return (
    <div className="App">
      <Application />
      <FooterGroup />
    </div>
  )

}
