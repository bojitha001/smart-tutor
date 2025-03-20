import { useState } from "react";
import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import img from "../../assets/images/KuppiMainImage.png";
import collab from "../../assets/images/KuppiImg2.png";
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
            <button className={styles.openTopic}>Open a Topic</button>
            <Link to="/kuppigroups-communities">
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

      <div className={styles.bodysection}>
        <h2>Why Collaborate?</h2>

        <ul className={styles.whyPoint}>
          <li>
            Group Learning – Exchange ideas, ask questions, and solve problems
            together.
          </li>
          <li>
            Live Study Sessions – Join scheduled or on-demand sessions with
            expert tutors.
          </li>
          <li>
            Resource Sharing – Access notes, study guides, and recorded
            sessions.
          </li>
          <li>
            Discussion Forums – Engage in topic-based discussions and knowledge
            sharing.
          </li>
          <li>
            Real-Time Assistance – Get instant help from peers and tutors.
          </li>
        </ul>
        <div className={styles.bodyImage}>
          <img src={collab} alt="Kuppi-Collab-Image"></img>
        </div>
      </div>
    </div>
  );
};

export default KuppiGroups;
