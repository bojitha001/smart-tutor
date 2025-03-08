import { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import styles from "../../.ExternalCss/StudentNavbar.module.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  return (
    <div className={`${styles["navbar"]}`}>
      <div className={`${styles["search-container"]}`}>
        <FaSearch className={`${styles["search-icon"]}`} />
        <input type="text" placeholder="Search here..." className={`${styles["search-input"]}`} />
      </div>
      
      <div className={`${styles["user-section"]}`}>
        <div className={`${styles["notification-container"]}`}>
          <button className={`${styles["notification-button"]}`} onClick={toggleNotifications}>
            <FaBell />
            <span className={`${styles["notification-badge"]}`}>3</span>
          </button>
          
          {showNotifications && (
            <div className={`${styles["notification-dropdown"]}`}>
              <h3>Notifications</h3>
              <div className={`${styles["notification-item"]}`}>
                <p>Your course "UI/UX Design" has been updated</p>
                <span>2 hours ago</span>
              </div>
              <div className={`${styles["notification-item"]}`}>
                <p>New test scheduled for JavaScript course</p>
                <span>Yesterday</span>
              </div>
              <div className={`${styles["notification-item"]}`}>
                <p>You've completed 50% of UI/UX course</p>
                <span>2 days ago</span>
              </div>
            </div>
          )}
        </div>
        <div className={`${styles["user-profile"]}`}>
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="User" 
            className={`${styles["user-avatar"]}`} 
          />
          <div className={`${styles["user-info"]}`}>
            <h4>Thevinu Perera</h4>
            <p>@thevinu456</p>
          </div>
        </div>
        
      </div>
    </div>

  );
}

export default Navbar;