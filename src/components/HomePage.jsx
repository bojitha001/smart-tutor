import React from "react";
import "../.ExternalCss/HomePage.css";
import mainImage from "../assets/images/mainImg2.png";
import chatBot from "../assets/images/chatBot.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomePage = () => {
  return (
    
      <div className="container-1">
        <div className="container-2">
        <h1 className="Main-Title">Your Path to Academic Success</h1>
        <p className="Main-Des">
          Connect with qualified, passionate tutors who are ready to help you
          achieve your learning goals, one session at a time.
        </p>

        <div className="input-group mb-3 search-bar">
          {/* <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" style={{color: "#000000",}} /> */}
          <input
            type="text"
            className="form-control input-txt"
            placeholder="Search for your success..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn  search-btn" type="button" id="button-addon2">
            Search
          </button>
        </div>

        <img className="Main-Img" src={mainImage} alt="" />
        </div>
      </div>
    
  );
};
