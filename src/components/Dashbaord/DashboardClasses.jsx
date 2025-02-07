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

            <header className={`${styles["header"]}`}>

                <div className={`${styles["search-bar"]}`}>
                           <IoSearch />
                           <input type="text" placeholder="Search here..." />
                         </div>

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
            </header>

            <div className={`${styles["content-wrapper"]}`}>
            <div className={styles.content}>
                    <div className={`${styles["upcoming-classes"]}`}>
                        <div className={`${styles["section-header"]}`}>
                            <h2>
                                <span>UPCOMING</span> Classes
                            </h2>
                            <a href="#">View All</a>
                        </div>

                        <div className={`${styles["class-grid"]}`}>
                            {upcomingClasses.map((classItem, index) => (
                                <div key={index} className={`${styles["class-card"]}`}>
                                    <p className={`${styles["class-time"]}`}>{classItem.time}</p>
                                    <p className={`${styles["class-time"]}`}>{classItem.date}</p>
                                    <h3 className={`${styles["class-time"]}`}>{classItem.student}</h3>
                                    <p className={`${styles["class-time"]}`}>{classItem.grade} - {classItem.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles["stats-grid"]}`}>
                        {/* Classes Per Week */}
                        <div className={`${styles["stats-card"]}`}>
                            <div className={`${styles["section-header"]}`}>
                                <h2 className={`${styles["section-title"]}`}>Classes Per Week</h2>
                                <select>
                                    <option>Week</option>
                                </select>
                            </div>
                            {/* Progress circle and stats content */}
                        </div>

                        {/* Homework */}
                        <div className={`${styles["stats-card"]}`}>
                            <h2 className={`${styles["section-title"]}`}>Homework</h2>
                            {/* Add homework content here */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default DashboardClasses;


