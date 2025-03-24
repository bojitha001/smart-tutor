import { useState, useEffect } from "react";
import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import img from "../../assets/images/KuppiMainImage.png";

import { Link } from "react-router";

import groupLearningImg from "../../assets/images/GroupLearing-1.png";

import resourceSharingImg from "../../assets/images/ResourseSharing-3.png";
import discussionForumsImg from "../../assets/images/DiscussionForum-4.png";
import realtimeAssistanceImg from "../../assets/images/RealTime-5.png";

const whyCollab = [
  {
    id: 1,
    title: "Group Learning",
    description: "Exchange ideas, ask questions, and solve problems together.",
    image: groupLearningImg,
  },
  {
    id: 2,
    title: "Live Study Sessions",
    description: "Join scheduled or on-demand sessions with expert tutors.",
    // image: liveSessionsImg,
  },
  {
    id: 3,
    title: "Resource Sharing",
    description: "Access notes, study guides, and recorded sessions.",
    image: resourceSharingImg,
  },
  {
    id: 4,
    title: "Discussion Forums",
    description: "Engage in topic-based discussions and knowledge sharing.",
    image: discussionForumsImg,
  },
  {
    id: 5,
    title: "Real-Time Assistance",
    description: "Get instant help from peers and tutors.",
    image: realtimeAssistanceImg,
  },
];

const KuppiGroups = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  
  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  // Determine if we should use mobile layout
  const isMobile = windowWidth < 1024;

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
          <img 
            src={img} 
            alt="Students group"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default KuppiGroups;