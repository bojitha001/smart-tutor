import React from "react";
import { Outlet } from "react-router";
import styles from '../.ExternalCss/TutorMainView.module.css'
import Sidebar from "../components/tutorDashboard/Sidebar";

const DashBoardLayout = () => {
  return (
    <div>
      <div className={styles.app}>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  );
};

export default DashBoardLayout;
