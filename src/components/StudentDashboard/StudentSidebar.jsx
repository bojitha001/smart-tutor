// import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaClipboardList, 
  FaCreditCard, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';
// import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1><span className="logo-dark">SMART</span> <span className="logo-accent">TUTOR</span></h1>
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/" className="nav-item">
          <FaHome className="nav-icon" />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink to="/courses" className="nav-item">
          <FaBook className="nav-icon" />
          <span>Courses</span>
        </NavLink>
        
        <NavLink to="/results" className="nav-item">
          <FaClipboardList className="nav-icon" />
          <span>Results</span>
        </NavLink>
        
        <NavLink to="/payments" className="nav-item">
          <FaCreditCard className="nav-icon" />
          <span>Payments</span>
        </NavLink>
        
        <NavLink to="/settings" className="nav-item">
          <FaCog className="nav-icon" />
          <span>Settings</span>
        </NavLink>
      </nav>
      
      <div className="logout-container">
        <button className="logout-button">
          <FaSignOutAlt className="nav-icon" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;