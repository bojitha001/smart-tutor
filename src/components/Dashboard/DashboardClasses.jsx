import React, { useEffect, useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { FaBell, FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import styles from "../../.ExternalCss/dashboardClasses.module.css";
import testImg from "../../assets/images/Avatar1.jpg"; 
import { useUser } from '@clerk/clerk-react';



function DashboardClasses() {
  const [upcomingClasses,setUpComingClasses] = useState([]);
  const {user} = useUser();
  const userClerk = user?.id;
  // console.log(userClerk);
  
  useEffect(() => {
    const fetchClasses = async() => {
      if(userClerk) {
        try {
          const response = await fetch(
            `https://smart-tutor-backend-production.up.railway.app/bookings/${user.id}`
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

  const handleMoodleClick = (e) => {
    e.preventDefault(); 
    window.open("http://34.93.21.206", "_blank"); 
  };

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
          
          <button onClick={handleMoodleClick} className={styles.moddleButton}>join</button>
          
        </section>

        
      </main>
    </div>
  );
}

export default DashboardClasses;