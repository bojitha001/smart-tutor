import React from 'react'
import { Link } from 'react-router-dom';
import "../../.ExternalCss/Sidebar.css";
import userIcon from "../../assets/images/User.png";
import teacherIcon from "../../assets/images/Teacher.png";
import studentIcon from "../../assets/images/Student Male.png";
import payIcon from "../../assets/images/Card Payment.png";
import settingIcon from "../../assets/images/Settings.png";
import logoutIcon from "../../assets/images/Logout.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="logo">
        <h2>SMART<span> TUTOR</span></h2>
    </div>
    <nav>
       <Link to="/"className="nav-item active">
       <img src={userIcon} alt="Dashboard" className="icon" /> Dashboard
       </Link>
       <Link to="/classes" className="nav-item">
       <img src={teacherIcon} alt="Classes" className="icon" /> Classes
       </Link>
       <Link to="/students" className="nav-items">
        <img src={studentIcon} alt="Students" className="icon" /> Students 
       </Link>
       <Link to="/payments" className="nav-item">
       <img src={payIcon} alt="Payments" className="icon" /> Payments
       </Link>
       <Link to="/settings" className="nav-item">
       <img src={settingIcon} alt="Settings" className="icon" /> Settings
       </Link>
    </nav>
    <div className="Logout">
        <Link to="/logout" className="nav-item">
        <img src={logoutIcon} alt="Logout" className="icon"/> Logout
        </Link>
    </div>
</div>
  )
}

export default Sidebar