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
    <Link to='dashboard' className= {`${styles["nav-item"]}`}>
      <FaHome className={`${styles["nav-icon"]}`} />
      <span>Dashboard</span>
      </Link>
    
    <Link to='dashboard/courses' className= {`${styles["nav-item"]}`}>
      <FaBook className={`${styles["nav-icon"]}`} />
      <span>Courses</span>
      </Link>
    
    <Link to='dashboard/results' className= {`${styles["nav-item"]}`}>
      <FaClipboardList className={`${styles["nav-icon"]}`} />
      <span>Results</span>
      </Link>

    <Link to='dashboard/payments' className= {`${styles["nav-item"]}`}>
      <FaCreditCard className={`${styles["nav-icon"]}`} />
      <span>Payments</span>
    </Link>

    
  <Link to='dashboard/settings' className= {`${styles["nav-item"]}`}>
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