import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../.ExternalCss/NavBar.module.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Add mobile menu class to body
  if (mobileMenuOpen) {
    document.body.classList.add(styles["mobile-menu-open"]);
  } else {
    document.body.classList.remove(styles["mobile-menu-open"]);
  }

  return (
    <>
      <div className={`${styles.header} ${mobileMenuOpen ? styles["mobile-menu-open"] : ""}`}>
        <div className={styles.logo}>
          <p>
            SMART<span className={styles.smart}>TUTOR</span>
          </p>
        </div>
        
        <button 
          className={styles["mobile-menu-btn"]} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={styles["mobile-menu-icon"]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        <nav className={styles["main-nav"]}>
          <ul className={styles["main-nav-list"]}>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li>.</li>
            <li><Link to="/find-tutor" onClick={closeMobileMenu}>Find a Tutor</Link></li>
            <li>.</li>
            <li><Link to="/kuppiGroups" onClick={closeMobileMenu}>Kuppi Groups</Link></li>
            <li>.</li>
            <li><Link to="/become-tutor" onClick={closeMobileMenu}>Become a Tutor</Link></li>
          </ul>
        </nav>
        
        <div className={styles["nav-buttons"]}>
          <p className={styles["lang"]}>&#127760; En</p>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-x-4 items-center">
              <button>
                <Link to={"/login"} className={styles["login"]}>Login</Link>
              </button>
              <button>
                <Link to={"/signup"} className={styles["signup"]}>Sign up</Link>
              </button>
            </div>
          </SignedOut>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      <div className={styles.overlay} onClick={closeMobileMenu}></div>
    </>
  );
};