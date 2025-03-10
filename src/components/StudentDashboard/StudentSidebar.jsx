// import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaClipboardList, 
  FaCreditCard, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';
import styles from '../../.ExternalCss/StudentSidebar.module.css';
import { Link } from 'react-router';

function Sidebar() {
  return (
    <div className={`${styles["sidebar"]}`}>
  <div className={`${styles["logo"]}`}>
    <h1>
      <span className={`${styles["logo-dark"]}`}>SMART</span> 
      <span className={`${styles["logo-accent"]}`}>TUTOR</span>
    </h1>
  </div>
  
  <nav className={`${styles["nav-menu"]}`}>
    <Link to='dashboard'>
      <FaHome className={`${styles["nav-icon"]}`} />
      <span>Dashboard</span>
      </Link>
    
    <Link to='dashboard/courses'>
      <FaBook className={`${styles["nav-icon"]}`} />
      <span>Courses</span>
      </Link>
    
    <Link to='dashboard/results'>
      <FaClipboardList className={`${styles["nav-icon"]}`} />
      <span>Results</span>
      </Link>

    <Link to='dashboard/payments'>
      <FaCreditCard className={`${styles["nav-icon"]}`} />
      <span>Payments</span>
    </Link>

    
  <Link to='dashboard/settings'>
      <FaCog className={`${styles["nav-icon"]}`} />
      <span>Settings</span>
  </Link>

  </nav>
  
  <div className={`${styles["logout-container"]}`}>
    <button className={`${styles["logout-button"]}`}>
      <FaSignOutAlt className={`${styles["nav-icon"]}`} />
      <span>Logout</span>
    </button>
  </div>
</div>
  );
}

export default Sidebar;