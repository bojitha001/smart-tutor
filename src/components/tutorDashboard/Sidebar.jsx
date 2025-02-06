import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../.ExternalCss/TutorMainView.module.css";
import userIcon from "../../assets/images/User.png";
import teacherIcon from "../../assets/images/Teacher.png";
import studentIcon from "../../assets/images/Student Male.png";
import payIcon from "../../assets/images/Card Payment.png";
import settingIcon from "../../assets/images/Settings.png";
import logoutIcon from "../../assets/images/Logout.png";

const Sidebar = () => {
  return (
    
    <div className={styles.sidebar}>
    <div className={styles.logo}>
        <h2><span>SMART</span> TUTOR</h2>
    </div>
    <nav>
       <Link to="/"className={`${styles["nav-item"]} ${styles.active}`}>
       <img src={userIcon} alt="Dashboard" className={styles.icon} /> Dashboard
       </Link>
       <Link to="/classes" className={`${styles["nav-item"]}`}>
       <img src={teacherIcon} alt="Classes" className={styles.icon} /> Classes
       </Link>
       <Link to="/students" className={`${styles["nav-item"]}`}>
        <img src={studentIcon} alt="Students" className={styles.icon} /> Students 
       </Link>
       <Link to="/payments" className={`${styles["nav-item"]}`}>
       <img src={payIcon} alt="Payments" className={styles.icon} /> Payments
       </Link>
       <Link to="/settings" className={`${styles["nav-item"]}`}>
       <img src={settingIcon} alt="Settings" className={styles.icon} /> Settings
       </Link>
    </nav>
    <div className={styles.logout}>
        <Link to="/logout" className={`${styles["nav-item"]}`}>
        <img src={logoutIcon} alt="Logout" className={styles.icon}/> Logout
        </Link>
    </div>
</div>
  )
}

export default Sidebar