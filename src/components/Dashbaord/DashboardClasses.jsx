import React from 'react';
import styles from "../../.ExternalCss/dashboardClasses.module.css";

function DashboardClasses() {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const progress = 81;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className={styles.container}>
            {/* Upcoming Classes */}
            <section className={styles.upcomingSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.upcomingText}>UPCOMING</span> Classes
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
                            <svg viewBox="0 0 160 160">
                                <circle
                                    className={styles.progressBackground}
                                    cx="80"
                                    cy="80"
                                    r={radius}
                                />
                                <circle
                                    className={styles.progressBar}
                                    cx="80"
                                    cy="80"
                                    r={radius}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                />
                            </svg>
                            <div className={styles.progressText}>{progress}%</div>
                        </div>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <h3 className={styles.sectionTitle}>Homework</h3>
                    {/* Add homework content here */}
                </div>
            </section>
        </div>
    );
}

export default DashboardClasses;