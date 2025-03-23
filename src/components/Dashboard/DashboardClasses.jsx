import React, { useEffect, useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { FaBell, FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import styles from "../../.ExternalCss/dashboardClasses.module.css";
import testImg from "../../assets/images/Avatar1.jpg"; 
import { useUser } from '@clerk/clerk-react';



function DashboardClasses() {
  const [upcomingClasses,setUpComingClasses] = useState([]);
    // {
    //   time: '6:00 PM',
    //   date: 'Tomorrow',
    //   teacher: 'Monali Rathnayake',
    //   grade: 'Gr.10 - Individual'
    // },
    // {
    //   time: '4:00 PM',
    //   date: '23/01/2025',
    //   teacher: 'Thevinu Perera',
    //   grade: 'Gr.11 - Group'
    // },
    // {
    //   time: '5:00 PM',
    //   date: '25/01/2025',
    //   teacher: 'Manilka Sadakan',
    //   grade: 'Gr.10 - Individual'
    // },
    // {
    //   time: '8:00 PM',
    //   date: '25/01/2025',
    //   teacher: 'Bojitha Soma',
    //   grade: 'Gr.11 - Individual'
    // },
    // {
    //   time: '8:00 PM',
    //   date: '25/01/2025',
    //   teacher: 'Bojitha Soma',
    //   grade: 'Gr.11 - Individual'
    // },
    // {
    //   time: '8:00 PM',
    //   date: '25/01/2025',
    //   teacher: 'Bojitha Soma',
    //   grade: 'Gr.11 - Individual'
    // }
  

  const {user} = useUser();
  const userClerk = user?.id;
  // console.log(userClerk);

  useEffect(() => {
    const fetchClasses = async() => {
      if(userClerk) {
        try {
          const response = await fetch(
            `http://localhost:8080/bookings/${user.id}`
          );
          
          if (response.ok) {
            const data = await response.json();
            setUpComingClasses(data);
          } else {
            console.error('Failed to fetch classes');
          }
        } catch (error) {
          console.error('Error fetching classes:', error);
        }
      }
    }
    fetchClasses();
  }, [userClerk])

  console.log(upcomingClasses)

  return (
    <div className={styles.dashboard}>
      {/* Removed the header section with search bar and profile */}
      
      <main className={styles.content}>
        <section className={styles.upcoming}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.text}>UPCOMING Classes</h2>
            <a href="#" className={styles.viewAll}>view all</a>
          </div>
          <div className={styles.classGrid}>
            {upcomingClasses.map((cls, index) => (
              <div key={index} className={styles.classCard}>
                <div className={styles.classTime}>{cls.time}</div>
                <div className={styles.classDate}>{cls.date}</div>
                <h3>{cls.tutorID?.name || 'Unknown Tutor'}</h3>
                
                <p>{cls.studentName}</p>
                
              </div>
            ))}
          </div>
        </section>

        <div className={styles.statsRow}>
          <section className={styles.progress}>
            <h2>Classes Per Week</h2>
            <div className={styles.progressWrapper}>
              <div className={styles.circularProgress}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle
                    className={styles.backgroundCircle}
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    className={styles.progressCircle}
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251.327"
                    strokeDashoffset="47.752"
                    transform="rotate(-90 50 50)"
                  />
                  <text
                    x="50"
                    y="50"
                    className={styles.percentage}
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    81%
                  </text>
                </svg>
              </div>
              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <span className={styles.dot}></span>
                  <span>Pending</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={`${styles.dot} ${styles.done}`}></span>
                  <span>Done</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.homework}>
            <h2>Homework</h2>
            <div className={styles.homeworkContent}>
              <p>No homework assigned yet.</p>
            </div>
          </section>

          <div className={styles.advertisements}>
            <div className={styles["section-header"]}>
              <h3 className={styles["section-title"]}>Advertisements</h3>
            </div>
            <div className={styles["ad-cards"]}>
              <div className={styles["ad-card"]}>
                <img src={testImg} alt="Mathematics Class" />
                <div className={styles["ad-content"]}>
                  <h4>Mathematics Class</h4>
                  <p>Advanced calculus for Grade 12 students</p>
                </div>
              </div>
              <div className={styles["ad-card"]}>
                <img src={testImg} alt="Physics Class" />
                <div className={styles["ad-content"]}>
                  <h4>Physics Class</h4>
                  <p>Mechanics and dynamics for Grade 11 students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardClasses;