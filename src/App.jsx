import React from "react";
import "./App.scss";
import SectionN1 from "./Footer/FooterLeft/SectionN1";
import SectionN2 from "./Footer/FooterCenter/SectionN2";


export default function App() {
    return (
          <footer className="Footer">
            <SectionN1/>
            <SectionN2/>
            <p>Hayko</p>
          </footer>
    )

}
