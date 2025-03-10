import React from 'react'
import Sidebar from '../components/StudentDashboard/StudentSidebar'
import Navbar from '../components/StudentDashboard/StudentNavbar'
import styles from '../.ExternalCss/studentDashboardLayout.module.css'
import { Outlet } from 'react-router'


const StudentDashboardLayout = () => {
  return (
    <div className={`${styles.app}`}>
      <Sidebar />
      <div className={`${styles["main-content"]}`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default StudentDashboardLayout