import React from "react";
import "../.ExternalCss/NavBar.css";

export const Navbar = () => {
  return (
    <div className="header">
      <div class="logo">
        <p>
          SMART<span class="smart">TUTOR</span>
        </p>
      </div>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>Find a Tutor</li>
          <li>.</li>
          <li>Resources</li>
          <li>.</li>
          <li>Prices</li>
          <li>.</li>
          <li>Become a Tutor</li>
        </ul>
      </nav>
      <div class="nav-buttons">
        <p class="lang">&#127760; En</p>
        {/* <img class="world" src="img/globe-outline.svg" alt=""> */}
        <button>
          <p class="login">Log In</p>
        </button>
        <button>
          <p class="signup">Sign up</p>
        </button>
      </div>
    </div>
  );
};
