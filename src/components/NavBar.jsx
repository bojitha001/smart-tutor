import React from "react";
import styles from "../.ExternalCss/NavBar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <div class={styles.logo}>
        <p>
          SMART<span class={styles.smart}>TUTOR</span>
        </p>
      </div>
      <nav class={`${styles["main-nav"]}`}>
        <ul class={`${styles["main-nav-list"]}`}>
          <li>Find a Tutor</li>
          <li>.</li>
          <li>Resources</li>
          <li>.</li>
          <li>Prices</li>
          <li>.</li>
          <li>Become a Tutor</li>
        </ul>
      </nav>
      <div class={`${styles["nav-buttons"]}`}>
        <p class={`${styles["lang"]}`}>&#127760; En</p>
        {/* <img class="world" src="img/globe-outline.svg" alt=""> */}
        <button>
          <p class={`${styles["login"]}`}>Log In</p>
        </button>
        <button>
          <p class={`${styles["signup"]}`}>Sign up</p>
        </button>
      </div>
    </div>
  );
};
