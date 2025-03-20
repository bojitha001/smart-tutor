import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import styles from '../.ExternalCss/TutorMainView.module.css'
import Sidebar from "../components/tutorDashboard/Sidebar";

const DashBoardLayout = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      return navigate("/login");
    }

    if (user?.publicMetadata?.role !== "tutor" && user?.publicMetadata?.role !== "student") {
      return navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate, user]);

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
