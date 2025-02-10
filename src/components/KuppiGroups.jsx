import { useState } from 'react';
import React from 'react'
import styles from '../.ExternalCss/KuppiGroups.module.css';
import img from "../assets/images/Students-pana (1) 1.png";

const KuppiGroups = () => {
    const recentTopics = [
        {
          id: 1,
          author: "Samadhi Sandunika",
          timeAgo: "3m ago",
          title: "Can someone explain more about Chemical reactions Lesson",
          responses: 14,
          views: 79,
          tag: "Science"
        },
        {
          id: 2,
          author: "Bojitha Nawarathna",
          timeAgo: "5m ago",
          title: "How to solve this problem?",
          responses: 3,
          views: 55,
          tag: "Physics",
          hasImage: true
        },
        {
          id: 3,
          author: "Vihan Mendis",
          timeAgo: "14m ago",
          title: "Can someone help me with this Python question?",
          responses: 26,
          views: 111,
          tag: "ICT"
        },
        {
          id: 4,
          author: "Garuka Adithya",
          timeAgo: "17m ago",
          title: "Why isn't this python code running?",
          responses: 27,
          views: 137,
          tag: "ICT"
        }
      ];
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.smart}>SMART</span>
          <span className={styles.tutor}>TUTOR</span>
        </div>
      </nav>

      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Kuppi Groups</h1>
          <p className={styles.description}>
            Kuppi Groups allow students to come together for collaborative learning, 
            where they can share ideas, support each other, and improve as a team. 
            It's a free space for students to connect, study, and succeed through 
            group sessions.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Open a Topic</button>
            <button className={styles.secondaryButton}>Explore Communities</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={img} alt="Students" />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll down to see Recent Topics</span>
        <span className={styles.arrow}>▼</span>
      </div>

      <section className={styles.recentTopics}>
        <h2 className={styles.sectionTitle}>Recent Topics</h2>
        
        <div className={styles.topicsList}>
          {recentTopics.map(topic => (
            <div key={topic.id} className={styles.topicCard}>
              <div className={styles.topicHeader}>
                <div className={styles.userInfo}>
                  <div className={styles.avatar} />
                  <div className={styles.authorDetails}>
                    <span className={styles.authorName}>{topic.author}</span>
                    <span className={styles.timeAgo}>{topic.timeAgo}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.topicContent}>
                <h3 className={styles.topicTitle}>{topic.title}</h3>
                {topic.hasImage && (
                  <div className={styles.problemImage}>
                    <img src="https://raw.githubusercontent.com/your-image-url/problem.png" alt="Problem" />
                  </div>
                )}
              </div>

              <div className={styles.topicFooter}>
                <div className={styles.engagement}>
                  <span>{topic.responses} Responses</span>
                  <span className={styles.dot}>•</span>
                  <span>{topic.views}</span>
                </div>
                <span className={`${styles.tag} ${styles[topic.tag.toLowerCase()]}`}>
                  {topic.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.loadMore}>
          See more Topics
          <span className={styles.arrow}>▼</span>
        </button>
      </section>
    </div>
  )
}

export default KuppiGroups