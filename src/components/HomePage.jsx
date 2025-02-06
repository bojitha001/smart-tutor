import React from "react";
import styles from "../.ExternalCss/HomePage.module.css";
import mainImage from "../assets/images/mainImg2.png";
import chatBot from "../assets/images/chatBot.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomePage = () => {
  return (
    
      <div className={`${styles["container-1"]}`}>
        <div className={`${styles["container-2"]}`}>
        <h1 className={`${styles["Main-Title"]}`}>Your Path to Academic Success</h1>
        <p className={`${styles["Main-Des"]}`}>
          Connect with qualified, passionate tutors who are ready to help you
          achieve your learning goals, one session at a time.
        </p>

        <div className={`${styles["search-bar"]} input-group mb-3`}>  
          {/* <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" style={{color: "#000000",}} /> */}
          <input
            type="text"
            className={`${styles["input-txt"]} form-control`}                                      
            placeholder="Search for your success..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className={`${styles["search-btn"]} btn`} type="button" id="button-addon2">
            Search
          </button>
        </div>

        <img className={`${styles["Main-Img"]}`} src={mainImage} alt="" />
        </div>
      </div>
    
  );
};
