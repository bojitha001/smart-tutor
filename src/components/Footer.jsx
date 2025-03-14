import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import styles from "../.ExternalCss/footer.module.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles["footer-grid"]} ${styles.container}`}>
        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Site Map</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/why-us">
                Why Us
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Legal</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/info">
                General Info
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/terms">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Services</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/find-tutor">
                Find a Tutor
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/kuppiGroups">
                Kuppi Groups
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/pricing">
                Pricing Plan
              </Link>
            </li>
            <li>
              <Link className={`${styles["footer-link"]}`} to="/become-tutor">
                Become a Tutor
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Contact Us</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li className={`${styles["footer-nav-icon"]}`}>
              <Phone size={18} />
              <a className={`${styles["footer-link"]}`} href="tel:+94768694195">
                +94 76 869 4195
              </a>
            </li>
            <li className={`${styles["footer-nav-icon"]}`}>
              <Mail size={18} />
              <a className={`${styles["footer-link"]}`} href="mailto:smarttutor0019@gmail.com">
                smarttutor0019@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles["footer-bottom"]}`}>
        <hr />
        <div className={`${styles["footer-bottom-logo-sec"]}`}>
          <p>SMART<span> TUTOR</span></p>
          <ul className={`${styles.logos}`}>
            <li>
              <a className={`${styles["footer-logo"]}`} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
            </li>
            <li>
              <a className={`${styles["footer-logo"]}`} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
            </li>
            <li>
              <a className={`${styles["footer-logo"]}`} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;