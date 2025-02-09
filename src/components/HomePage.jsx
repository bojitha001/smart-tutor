import React from "react";
import styles from "../.ExternalCss/HomePage.module.css";
import mainImage from "../assets/images/mainImg2.png";
import chatBot from "../assets/images/chatBot.png";
import sitting from "../assets/images/Home-sitting.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sitting from "../assets/images/Home-sitting.png"
import icon1 from "../assets/images/RFID Signal.png"
import icon2 from "../assets/images/People Skin Type 7.png"
import icon3 from "../assets/images/Calendar 12.png"
import icon4 from "../assets/images/Test Results.png"
import icon5 from "../assets/images/Find and Replace.png"
import icon6 from "../assets/images/Brake Warning.png"


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

const features = [
  {
    icon: <img src={icon1}  width="30" height="30"/>,
    title: 'Student Progress Tracking',
    description: 'Track your academic progress in real time, including attendance and performance, and keep your parents informed of your growth.'
  },
  {
    icon: <img src={icon2}  width="30" height="30"/>,
    title: 'Kuppi Groups',
    description: 'Join collaborative study groups where you can work together with classmates, share notes, and help each other learn more effectively.'
  },
  {
    icon: <img src={icon3}  width="30" height="30"/>,
    title: 'Event Calendar',
    description: 'Stay organized and never miss important events, classes, or deadlines with the interactive event calendar.'
  },
  {
    icon: <img src={icon4}  width="30" height="30"/>,
    title: 'Gamified Quizzes and Assessments',
    description: 'Challenge yourself with fun, gamified quizzes and assessments, and track your scores on the leaderboard for added motivation.'
  },
  {
    icon: <img src={icon5}  width="30" height="30"/>,
    title: 'Search with Filters for Students',
    description: 'Find the perfect tutor or study resource with advanced search filters tailored to your needs.'
  },
  {
    icon: <img src={icon6}  width="30" height="30"/>,
    title: 'Alerts and Notifications',
    description: 'Receive reminders about upcoming classes, assignments, fee due dates, and special events so you stay up-to-date with your schedule.'
  }
]
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

  

 
    <div className={`${styles["container-features"]}`}>
      <div className={`${styles["header"]}`}>
        <h2 className={`${styles["tagline"]}`}>Learn Smarter, Achieve More</h2>
        <h1 className={`${styles["title"]}`}>
          Enhancing Learning with<br />
          SMART <span className={`${styles["highlight"]}`}>TUTOR</span>
        </h1>
      </div>
      
      <div className={`${styles["features-grid"]}`}>
        {features.map((feature, index) => (
          <div key={index} className={`${styles["feature-card"]}`}>
            <div className={`${styles["feature-icon"]}`}>{feature.icon}</div>
            <h3 className={`${styles["feature-title"]}`}>{feature.title}</h3>
            <p className={`${styles["feature-description"]}`}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
      </> 
  );
};
