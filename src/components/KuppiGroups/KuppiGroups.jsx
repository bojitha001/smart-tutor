import { useState } from "react";
import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import img from "../../assets/images/KuppiMainImage.png";
import { Link } from "react-router";
const KuppiGroups = () => {
  return (
    <div className={styles.kuppiGroupsHeader}>
      <div className={styles.headerContent}>
        <div className={styles.headerTitle}>
          <h1>Kuppi Groups</h1>
          <p>
            Kuppi Groups allow students to collaborate in a focused learning
            environment, where they can share ideas, support each other, and
            improve as a team. It's a free space for students to connect, study,
            and succeed through group sessions.
          </p>
          <div className={styles.headerButtons}>
            <Link to='/kuppigroups-requestTopic'>
              <button className={styles.openTopic}>Open a Topic</button>
            </Link>
            <Link to='/kuppigroups-communities'>
              <button className={styles.exploreCommunities}>
                Explore Communities
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.headerImage}>
          <img src={img} alt="Students group" />
        </div>
      </div>
    </div>
  );
};

export default KuppiGroups;
