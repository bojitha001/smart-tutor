import "bootstrap/dist/css/bootstrap.css";
import styles from "../src/.ExternalCss/TutorMainView.module.css";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInAuth } from "./components/LoginPage";
import { SignUpOptions } from "./components/SignUp/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/SignUp/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import { ResetPassword } from "./components/SignUp/tutorSignUp/PasswordReset";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/tutorDashboard/Sidebar";
// import DashBoard from "./components/Dashboard/DashboardClasses"
import DashboardClasses from "./components/Dashboard/DashboardClasses";
// import MainContent from "./components/tutorDashboard/MainContent";
// import SelectingSubjects from "./components/Parent/Student/SelectingSubjects";



function App() {
  return (
    <>
 
      <div className="App"> 
          {/* <Navbar /> */}
         {/* <BecomeATutor />    */}
        {/* <Sidebar/> */}
        {/* <HomePage /> */}
        {/* <SelectingSubjects /> */}
        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        {/* <SignInAuth/> */}
        {/* <ResetPassword/> */}
        {/* <DashboardClasses/> */}
        
          {/* <Sidebar/> */}
        
        

      </div>


      {/* <Router>
      <div className={styles.app}>
        <Sidebar />
        <MainContent/>
 main
      </div>
    </Router> */}
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUpQuestions" element={<SignUpQuestions />} />
          <Route path="/SignUpOptions" element={<SignUpOptions />} />
          <Route path="/SignIn" element={<SignInAuth />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
