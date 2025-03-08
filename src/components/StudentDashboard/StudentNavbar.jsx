import { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
// import './Navbar.css';

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  return (
    <div className="navbar">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search here..." className="search-input" />
      </div>
      
      <div className="user-section">
        <div className="notification-container">
          <button className="notification-button" onClick={toggleNotifications}>
            <FaBell />
            <span className="notification-badge">3</span>
          </button>
          
          {showNotifications && (
            <div className="notification-dropdown">
              <h3>Notifications</h3>
              <div className="notification-item">
                <p>Your course "UI/UX Design" has been updated</p>
                <span>2 hours ago</span>
              </div>
              <div className="notification-item">
                <p>New test scheduled for JavaScript course</p>
                <span>Yesterday</span>
              </div>
              <div className="notification-item">
                <p>You've completed 50% of UI/UX course</p>
                <span>2 days ago</span>
              </div>
            </div>
          )}
        </div>
        <div className="user-profile">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="User" 
            className="user-avatar" 
          />
          <div className="user-info">
            <h4>Thevinu Perera</h4>
            <p>@thevinu456</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;