import "bootstrap/dist/css/bootstrap.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import styles from "../src/.ExternalCss/TutorMainView.module.css";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInAuth } from "./components/LoginPage";
import { SignUpOptions } from "./components/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import { ResetPassword } from "./components/tutorSignUp/PasswordReset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/tutorDashboard/Sidebar";

import DashboardClasses from "./components/Dashbaord/DashboardClasses";
import DashboardPayments from "./components/Dashbaord/DashbaordPayments.jsx"
import MainContent from "./components/tutorDashboard/MainContent";
import StudentView from "./components/tutorDashboard/StudentSection";
import Settings from "./components/tutorDashboard/SettingSection";
import KuppiGroups from "./components/KuppiGroups/KuppiGroups.jsx";
import QuestionForm from "./components/KuppiGroups/QuestionForm.jsx";
import StudentSignUp from "./components/StudentSignUp/StudentSignUp.jsx"
import FindTutor from "./components/FindATutor";



function App() {
  return (

      <div className="App"> 
        {/* <Navbar /> */}
        {/* <BecomeATutor />*/}
        {/* <HomePage /> */}
        {/* <SelectingSubjects /> */}
        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        {/* <SignInAuth/> */}
        {/* <ResetPassword/> */}
        {/* <KuppiGroups/> */}
        {/* <FindTutor/> */}
        
      <Router>
      <div className={styles.app}>
        <Sidebar/>
        <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/classes" element={<DashboardClasses/>}/>
            <Route path="/students" element={<StudentView />} />
            <Route path="/payments" element={<DashboardPayments />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
