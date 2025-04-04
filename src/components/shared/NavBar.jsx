import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../.ExternalCss/NavBar.module.css";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dashboardPath, setDashboardPath] = useState('/student/dashboard');
  const { user, isLoaded } = useUser();

  useEffect(() => {
    try {
      if (isLoaded && user) {
        const publicMetadata = user.publicMetadata || {};
        
        if (publicMetadata.role) {
          switch (publicMetadata.role) {
            case 'tutor':
              setDashboardPath('/tutor-dashboard');
              break;
            case 'student':
              setDashboardPath('/student/dashboard');
              break;
            default:
              setDashboardPath(null);
          }
        } else {
          console.log("No userType found in metadata");
          setDashboardPath(null);
        }
      }
    } catch (error) {
      console.error("Error in useEffect:", error);
      setDashboardPath(null); // Fallback to default on error
    }
  }, [isLoaded, user]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Toggle overflow on body when menu is open/closed
    if (!mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      // Make sure to remove class when component unmounts
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`${styles.header} ${mobileMenuOpen ? styles["mobile-menu-open"] : ""}`}>
        <div className={styles.logo}>
          <p>
            SMART<span className={styles.smart}>TUTOR</span>
          </p>
        </div>
        
        <button 
          className={styles["mobile-menu-btn"]} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
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
            <UserButton 
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "3rem",
                    height: "3rem",
                  }
                }
              }}
            />
            {isLoaded && dashboardPath && (
              <div className={styles.dashboardButtonMain}>
                <button className={styles.dashboardButton}>
                  <Link to={dashboardPath}>Dashboard</Link>
                </button>
              </div>
            )}
          </SignedIn>
          <SignedOut>
            <div className={`flex ${styles.buttonAlign}`}>
              <button>
                <Link to={"/login"} className={styles["login"]}>Login</Link>
              </button>
              <button>
                <Link to={"/signup"} className={styles["signup"]}>Sign up</Link>
              </button>
            </div>
          </SignedOut>
        </div>
      </header>
      
      {/* Overlay for mobile menu */}
      <div 
        className={styles.overlay} 
        onClick={closeMobileMenu}
        role="presentation"
      ></div>
    </>
  );
};