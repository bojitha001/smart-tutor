import React from "react";
import styles from "../.ExternalCss/HomePage.module.css";
import mainImage from "../assets/images/mainImg2.png";
import chatBot from "../assets/images/chatBot.png";
import sitting from "../assets/images/Home-sitting.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const categories = [
  { id: 1, name: 'Biology', color: '#FFE9B1', icon: '🧬' },
  { id: 2, name: 'Physics', color: '#E4D3FF', icon: '🚀' },
  { id: 3, name: 'Chemistry', color: '#FFD6D6', icon: '🧪' },
  { id: 4, name: 'Mathematics', color: '#D6E4FF', icon: '📐' },
  { id: 5, name: 'ICT', color: '#D6FFF0', icon: '💻' },
  { id: 6, name: 'Econ', color: '#F0E6C8', icon: '📊' },
  { id: 7, name: 'Accounting', color: '#FFD6E8', icon: '📚' },
  { id: 8, name: 'Business Studies', color: '#D6FFF6', icon: '💼' },
  { id: 9, name: 'Agriculture', color: '#E3FFD6', icon: '🌱' },
];
export const HomePage = () => {
  return (
    <>
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
      <div className={`${styles["categories-container"]}`}>
      <h1>Explore Top Categories</h1>
      <div className={`${styles["categories-grid"]}`}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles["category-box"]}`}
            style={{ backgroundColor: category.color }}

          >
            <span className={`${styles["category-icon"]}`}>{category.icon}</span>
            <span className={`${styles["category-name"]}`}>{category.name}</span>
          </button>
        ))}
      </div>
      <button className={`${styles["see-more-button"]}`} >
        See More <span className={`${styles["arrow"]}`}>→</span>
      </button>
      <img 
        src = {sitting}
        alt="Student illustration" 
        className="student-illustration"
      />
    </div>
      </> 
  );
};
