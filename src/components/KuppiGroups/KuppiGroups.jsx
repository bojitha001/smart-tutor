import { useState } from "react";
import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import img from "../../assets/images/KuppiMainImage.png";
import collab from "../../assets/images/KuppiImg2.png";
import { Link } from "react-router";

import groupLearningImg from "../../assets/images/GroupLearing-1.png";

import resourceSharingImg from "../../assets/images/ResourseSharing-3.png";
import discussionForumsImg from "../../assets/images/DiscussionForum-4.png";
import realtimeAssistanceImg from "../../assets/images/RealTime-5.png";

const whyCollab = [
  {
    id: 1,
    title: "Group Learning –",
    description: "Exchange ideas, ask questions, and solve problems together.",
    image: groupLearningImg,
  },
  {
    id: 2,
    title: "Live Study Sessions – ",
    description: "Join scheduled or on-demand sessions with expert tutors.",
    image: liveSessionsImg,
  },
  {
    id: 3,
    title: "Resource Sharing –",
    description: "Exchange ideas, ask questions, and solve problems together.",
    image: resourceSharingImg,
  },
  {
    id: 4,
    title: "Discussion Forums –",
    description: "Engage in topic-based discussions and knowledge sharing.",
    image: discussionForumsImg,
  },
  {
    id: 5,
    title: "Real-Time Assistance –",
    description: "Get instant help from peers and tutors.",
    image: realtimeAssistanceImg,
  },
];

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
              <button className={styles.openTopic}>Request a Community</button>
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
        <div className={styles.bodysection}>
          <h2>Why Collaborate?</h2>

          <div className={styles.bodyImage}>
            <img src={collab} alt="Kuppi-Collab-Image"></img>
          </div>

          <ul className={styles.whyPoint}>
            <li className={styles.l1}>
              Group Learning – Exchange ideas, ask questions, and solve problems
              together.
            </li>
            <li className={styles.l2}>
              Live Study Sessions – Join scheduled or on-demand sessions with
              expert tutors.
            </li>
            <li className={styles.l3}>
              Resource Sharing – Access notes, study guides, and recorded
              sessions.
            </li>
            <li className={styles.l4}>
              Discussion Forums – Engage in topic-based discussions and
              knowledge sharing.
            </li>
            <li className={styles.l5}>
              Real-Time Assistance – Get instant help from peers and tutors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KuppiGroups;
