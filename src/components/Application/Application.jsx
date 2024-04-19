import React from "react";
import './Application.scss'

export default function Application() {
  return (
    <div className="Application">
      <div>
        <img src="./icons/image1.svg" className='Application__phoneImage' />
      </div>
      <div className="Application-items">
        <h1 className="Application__title">
          Get the app!
          <img src="./icons/image2.svg" />
        </h1>

        <p>
          Thanks to our detailed search, you can easily meet the right person.
          Explore our custom selection of detailed dating profiles.
        </p>

        <div className="Application-buttons">
          <button>
            <p>Upload to</p>
            <i className="bi bi-apple"></i>
            <span>App Store</span>
          </button>
          <button>
            <p>Available in</p>
            <p>
              <img className="google" src="./icons/logo.svg" />
              <span>Google Play</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
