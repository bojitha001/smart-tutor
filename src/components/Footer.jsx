import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import styles from "../.ExternalCss/footer.module.css"
import React from 'react'

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles["footer-grid"]} ${styles.container}`}>
        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Site Map</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Home
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                About us
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Why Us
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Legal</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                General Info
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </nav>

        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Services</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Home
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                About us
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Pricing Plan
              </a>
            </li>
            <li>
              <a className={`${styles["footer-link"]}`} href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <nav className={`${styles["nav-col"]}`}>
          <p className={`${styles["footer-heading"]}`}>Contact Us</p>
          <ul className={`${styles["footer-nav"]}`}>
            <li className={`${styles["footer-nav-icon"]}`}>
              <Phone />
              <a className={`${styles["footer-link"]}`} href="">
                +94 76 869 4195
              </a>
            </li>
            <li className={`${styles["footer-nav-icon"]}`}>
              <Mail />
              <a className={`${styles["footer-link"]}`} href="">
                smarttutor0019@gamil.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles["footer-bottom"]}`}>
        <hr />
        <div className={`${styles["footer-bottom-logo-sec"]}`}>
          <p>SMART <span>TUTOR</span></p>
          <ul className={`${styles.logos}`}>
            <li><a className={`${styles["footer-logo"]}`} href="#"><Facebook /></a></li>
            <li><a className={`${styles["footer-logo"]}`} href="#"></a><Instagram /></li>
            <li><a className={`${styles["footer-logo"]}`} href="#"></a><Linkedin /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer