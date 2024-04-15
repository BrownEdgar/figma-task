import React from "react";
import './Application.scss'

export default function Application() {
   return (
    <div className="App">
      <div>
        <img src="./image1.svg" alt="" />
      </div>
      <div className="Appitems">
        <h1>Get the app!</h1>
        <h5>
          Thanks to our detailed search, you can easily meet the right person.
          Explore our custom selection of detailed dating profiles.
        </h5>
        <img src="./image2.svg" alt="" />
        <div className="Appbuttons">
          <button>
            <p>Upload to</p>
            <i class="bi bi-apple"></i>
            <span>App Store</span>
          </button>
          <button>
            <p>Available in</p>
            <p>
              <img className="google" src="./logo.svg" alt="" />
              <span>Google Play</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
