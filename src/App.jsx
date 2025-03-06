import "bootstrap/dist/css/bootstrap.min.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import styles from "../src/.ExternalCss/TutorMainView.module.css";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInAuth } from "./components/LoginPage";
import { SignUpOptions } from "./components/SignUp/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/SignUp/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import { ResetPassword } from "./components/SignUp/tutorSignUp/PasswordReset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/tutorDashboard/Sidebar";

import DashboardClasses from "./components/Dashboard/DashboardClasses.jsx";
import DashboardPayments from "./components/Dashboard/DashboardPayments.jsx";
import MainContent from "./components/tutorDashboard/MainContent";
import StudentView from "./components/tutorDashboard/StudentSection";
import Settings from "./components/tutorDashboard/SettingSection";
import KuppiGroups from "./components/KuppiGroups/KuppiGroups.jsx";
import QuestionForm from "./components/KuppiGroups/QuestionForm.jsx";
import StudentSignUp from "./components/StudentSignUp/StudentSignUp.jsx"
import FindTutor from "./components/FindATutor";
import ChatbotWidget from "./components/ChatbotWidget.jsx";



function App() {
  return (
    <>
      <div className="App"> 

           {/* <Navbar /> */}
         {/* <BecomeATutor />     */}
         {/* <ChatbotWidget/> */}
        {/* <Sidebar/> */}

        {/* <Navbar /> */}
        {/* <BecomeATutor />*/}

        {/* <HomePage /> */}
        {/* <SelectingSubjects /> */}
        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        {/* <SignInAuth/> */}
        {/* <ResetPassword/> */}
        {/* <DashboardClasses/> */}
        {/* <KuppiGroups/> */}
        
          {/* <Sidebar/> */}
          {/* <FindTutor/> */}
        
        
        {/* <Router>
          <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/homepage" element={<HomePage/>}/>
              <Route path="/find-tutor" element={<FindTutor/>}/>
              <Route path="/courses" element={<KuppiGroups/>}/>
            </Routes>
          </div>
        </Router> */}

      


      
    

      <Router>
      <div className={styles.app}>
        <ChatbotWidget/>
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
    {/* </div> */}
    

        {/* <Router>
          <ChatbotWidget/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SignUpQuestions" element={<SignUpQuestions />} />
            <Route path="/SignUpOptions" element={<SignUpOptions />} />
            <Route path="/SignIn" element={<SignInAuth />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
          </Routes>
        </Router> */}
      </div>
      </>
  );
}

export default App;
