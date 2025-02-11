import React, { useState } from "react";
 
import {
    Bell,
    Calendar,
    ChevronLeft,
    ChevronRight,
    GraduationCap,
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    Wallet
} from "lucide-react";
import styles from "../../.ExternalCss/dashboardclasses.module.css";
import { IoSearch } from "react-icons/io5";



function DashboardClasses() {
    const [upcomingClasses, setUpcomingClasses] = useState([
        { time: "10:00 AM", date: "Feb 10", student: "John Doe", grade: "5", type: "Math" },
        { time: "2:00 PM", date: "Feb 11", student: "Jane Doe", grade: "6", type: "Science" },
    ]);

    return (
        <main className={`${styles["main-content"]}`}>
            {/* Sidebar from Garuka */}

            <header>
                     <div className={`${styles["search-bar"]}`}>
                       <IoSearch />
                       <input type="text" placeholder="Search here..." />
                     </div>
                     <div className={`${styles["profile-section"]}`}>
                       <Bell className={`${styles["notification-icon"]}`} />
                       <div className={`${styles["profile-info"]}`}>
                         {/* <img src={testImg} alt="Profile" className={`${styles["profile-pic"]}`} /> */}
                         <div>
                           <div className={`${styles["profile-name"]}`}>Sarah Perera</div>
                           <div className={`${styles["profile-username"]}`}>@sarah123</div>
                         </div>
                       </div>
                     </div>
                   </header>

                {/* <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search here for classes..."
                        className="search-input"
                    />
                    <svg className="search-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div> */}
{/* 
                <div className={`${styles["header-right"]}`}>
                    <button className={`${styles["header-right"]}`}>
                        <Bell />
                    </button>
                    <div className={styles.profile}>
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className={`${styles["profile-img"]}`}/>
                        <div className={`${styles["profile-info"]}`}>
                            <h3>Vihan Mendis</h3>
                            <p>@vihan123</p>
                        </div>
                    </div>
                </div>
            </header> */}
            {/* Upcoming Classes */}
            <section className={styles.upcomingSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <span style={{ color: '#ef4444' }}>UPCOMING</span> Classes
                    </h2>
                    <a href="#" className={styles.viewAll}>
                        view all
                    </a>
                </div>

                <div className={styles.classGrid}>
                    {[
                        {
                            time: '6:00 PM',
                            date: 'Tomorrow',
                            name: 'Monali Rathnayake',
                            type: 'Gr.10 - Individual'
                        },
                        {
                            time: '4:00 PM',
                            date: '23/01/2025',
                            name: 'Monali Rathnayake',
                            type: 'Gr.11 - Group'
                        },
                        {
                            time: '5:00 PM',
                            date: '25/01/2025',
                            name: 'Monali Rathnayake',
                            type: 'Gr.10 - Individual'
                        },
                        {
                            time: '8:00 PM',
                            date: '25/01/2025',
                            name: 'Monali Rathnayake',
                            type: 'Gr.11 - Individual'
                        }
                    ].map((classItem, index) => (
                        <div key={index} className={styles.classCard}>
                            <div className={styles.classTime}>{classItem.time}</div>
                            <div className={styles.classDate}>{classItem.date}</div>
                            <div className={styles.classTitle}>{classItem.name}</div>
                            <div className={styles.classType}>{classItem.type}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.statCard}>
                    <div className={styles.statHeader}>
                        <h3 className={styles.sectionTitle}>Classes Per Week</h3>
                        <select className={styles.select}>
                            <option>Week</option>
                            <option>Month</option>
                            <option>Year</option>
                        </select>
                    </div>
                    <div className={styles.chartContainer}>
                        <div className={styles.progressCircle}>
                            <span className={styles.progressText}>81%</span>
                        </div>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <h3 className={styles.sectionTitle}>Homework</h3>
                    {/* Add homework content here */}
                </div>
            </section>
            
           
        </main>
    );
}


export default DashboardClasses;


