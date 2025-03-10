import React from "react";
import { Link } from "react-router-dom";
import styles from "../../.ExternalCss/NavBar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p>
          SMART<span className={styles.smart}>TUTOR</span>
        </p>
      </div>
      <nav className={styles["main-nav"]}>
        <ul className={styles["main-nav-list"]}>
          <li><Link to="/">Home</Link></li>
          <li>.</li>
          <li><Link to="/find-tutor">Find a Tutor</Link></li>
          <li>.</li>
          <li><Link to="/kuppiGroups">Kuppi Groups</Link></li>
          <li>.</li>
          {/* <li><Link to="/prices">Prices</Link></li>
          <li>.</li> */}
          <li><Link to="/become-tutor">Become a Tutor</Link></li>
        </ul>
      </nav>
      <div className={styles["nav-buttons"]}>
        <p className={styles["lang"]}>&#127760; En</p>
        <button>
          <Link to="/login" className={styles["login"]}>Log In</Link>
        </button>
        <button>
          <Link to="/signup" className={styles["signup"]}>Sign up</Link>
        </button>
      </div>
    </div>
  );
};
