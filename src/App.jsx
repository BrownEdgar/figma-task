import React from "react";
import "./App.scss";
import SectionN1 from "./Footer/FooterLeft/SectionN1";
import SectionN2 from "./Footer/FooterCenter/SectionN2";
import SectionN3 from "./Footer/FooterRight/SectionN3";


export default function App() {
    return (
          <footer className="Footer">
            <SectionN1/>
            <SectionN2/>
            <SectionN3/>
          </footer>
    )

}
