import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "../../.ExternalCss/TutorMainView.module.css";
import userIcon from "../../assets/images/User.png";
import teacherIcon from "../../assets/images/Teacher.png";
import studentIcon from "../../assets/images/Student Male.png";
import payIcon from "../../assets/images/Card Payment.png";
import settingIcon from "../../assets/images/Settings.png";
import logoutIcon from "../../assets/images/Logout.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 992) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (windowWidth < 992) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <button 
        className={styles.menuToggle} 
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {sidebarOpen && windowWidth < 992 ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
        <div className={styles.logo}>
          <h2><span>SMART</span> TUTOR</h2>
        </div>
        
        <button 
          className={styles.closeButton} 
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        
        <nav className={styles.sidebarNav}>
          <Link 
            to="/tutor-dashboard" 
            className={`${styles["nav-item"]} ${location.pathname === "/tutor-dashboard" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <img src={userIcon} alt="Dashboard" className={styles.icon} />
            <span className={styles.navText}>Dashboard</span>
          </Link>
          <Link 
            to="/tutor-dashboard-classes" 
            className={`${styles["nav-item"]} ${location.pathname === "/tutor-dashboard-classes" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <img src={teacherIcon} alt="Classes" className={styles.icon} />
            <span className={styles.navText}>Classes</span>
          </Link>
          <Link 
            to="/tutor-dashboard-students" 
            className={`${styles["nav-item"]} ${location.pathname === "/tutor-dashboard-students" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <img src={studentIcon} alt="Students" className={styles.icon} />
            <span className={styles.navText}>Students</span>
          </Link>
          <Link 
            to="/tutor-dashboard-payments" 
            className={`${styles["nav-item"]} ${location.pathname === "/tutor-dashboard-payments" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <img src={payIcon} alt="Payments" className={styles.icon} />
            <span className={styles.navText}>Payments</span>
          </Link>
          <Link 
            to="/tutor-dashboard-settings" 
            className={`${styles["nav-item"]} ${location.pathname === "/tutor-dashboard-settings" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <img src={settingIcon} alt="Settings" className={styles.icon} />
            <span className={styles.navText}>Settings</span>
          </Link>
        </nav>
        
        <div className={styles.logout}>
          <Link 
            to="/logout" 
            className={`${styles["nav-item"]} ${location.pathname === "/logout" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <img src={logoutIcon} alt="Logout" className={styles.icon}/>
            <span className={styles.navText}>Logout</span>
          </Link>
        </div>
      </div>
      
      {sidebarOpen && windowWidth < 992 && (
        <div className={styles.overlay} onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;