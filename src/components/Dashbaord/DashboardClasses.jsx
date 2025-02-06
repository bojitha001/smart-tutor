// import React from "react";
// import {
//     Bell,
//     Calender,
//     ChervonLeft,
//     ChervonRighht,
//     GraduationCap,
//     LayoutDashbaord,
//     LogOut,
//     Menu,
//     Settings,
//     Wallet
// } from 'lucide-react';
// import './styles.css';


// // Side Bar and Navigation bar from Garuka



// //Main content
// <main className="main-content">
//     <header className="header">
//         <div className="search-container">
//             <input
//                 type="text"
//                 placeholder="Se<arch here for classes..."
//                 className="search-input"
//             />
//             <svg className="search-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//         </div>

//         <div className="header-right">
//             <button className="notification-btn">
//                 <Bell />
//             </button>
//             <div className="profile">
//                 <img
//                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt="Profile"
//                     className="profile-img"
//                 />
//                 <div className="profile-info">
//                     <h3>Vihan Mendis</h3>
//                     <p>@vihan123</p>
//                 </div>
//             </div>
//         </div>
//     </header>


//     <div className="content-wrapper">
//         <div className="content">
//             <div className="upcoming-classes">
//                 <div className="section-header">
//                     <h2 className="section-header">
//                         <span>UPCOMING</span> Classes
//                     </h2>
//                     <a href="#">view ll</a>
//                 </div>

//                 <div className="class-grid">
//                     {upcomingClasses.map((classItem, index) => (
//                         <div key={index} className="class-card">
//                             <p className="class-time">{classItem.time}</p>
//                             <p className="class-time">{classItem.date}</p>
//                             <h3 className="class-student">{classItem.student}</h3>
//                             <p className="class-time">{classItem.grade} - {classItem.type}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="stats-grid">
//                 {/* Classes Per Week */}
//                 <div className="stats-card">
//                     <div className="section-header">
//                         <h2 className="section-title">Classes Per Week</h2>
//                         <select>
//                             <option>Week</option>
//                         </select>
//                     </div>
//                     {/* Progress circle and stats content */}
//                 </div>

//                 {/* Homework */}
//                 <div className="stats-card">
//                     <h2 className="section-title">Homework</h2>
//                     {/* Add homework content here */}
//                 </div>
//             </div>
//         </div>
//     </div>
// </main>

// export default dashboardClasses;

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
import "../../.ExternalCss/dashboardClasses.css";

function DashboardClasses() {
    const [upcomingClasses, setUpcomingClasses] = useState([
        { time: "10:00 AM", date: "Feb 10", student: "John Doe", grade: "5", type: "Math" },
        { time: "2:00 PM", date: "Feb 11", student: "Jane Doe", grade: "6", type: "Science" },
    ]);

    return (
        <main className="main-content">
            {/* Sidebar from Garuka */}

            <header className="header">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search here for classes..."
                        className="search-input"
                    />
                    <svg className="search-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <div className="header-right">
                    <button className="notification-btn">
                        <Bell />
                    </button>
                    <div className="profile">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className="profile-img"
                        />
                        <div className="profile-info">
                            <h3>Vihan Mendis</h3>
                            <p>@vihan123</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="content-wrapper">
                <div className="content">
                    <div className="upcoming-classes">
                        <div className="section-header">
                            <h2>
                                <span>UPCOMING</span> Classes
                            </h2>
                            <a href="#">View All</a>
                        </div>

                        <div className="class-grid">
                            {upcomingClasses.map((classItem, index) => (
                                <div key={index} className="class-card">
                                    <p className="class-time">{classItem.time}</p>
                                    <p className="class-time">{classItem.date}</p>
                                    <h3 className="class-student">{classItem.student}</h3>
                                    <p className="class-time">{classItem.grade} - {classItem.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="stats-grid">
                        {/* Classes Per Week */}
                        <div className="stats-card">
                            <div className="section-header">
                                <h2 className="section-title">Classes Per Week</h2>
                                <select>
                                    <option>Week</option>
                                </select>
                            </div>
                            {/* Progress circle and stats content */}
                        </div>

                        {/* Homework */}
                        <div className="stats-card">
                            <h2 className="section-title">Homework</h2>
                            {/* Add homework content here */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DashboardClasses;
