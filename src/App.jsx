import "bootstrap/dist/css/bootstrap.min.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import styles from "../src/.ExternalCss/TutorMainView.module.css";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInAuth } from "./components/LoginPage";
import { TutorSignUpOptions } from "./components/SignUp/tutorSignUp/TutorSignUpOptions";
import { TutorSignUpQuestions } from "./components/SignUp/tutorSignUp/TutorSignUpQuestions";
import { StudentSignUpOptions } from "./components/SignUp/studentSignUp/StudentSignUpOptions";
import { StudentSignUpQuestions } from "./components/SignUp/studentSignUp/StudentSignUpQuestions";
import { ParentSignUpOptions } from "./components/SignUp/parentSignUp/ParentSignUpOptions";
import { ParentSignUpQuestions } from "./components/SignUp/parentSignUp/ParentSignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import { ResetPassword } from "./components/SignUp/PasswordReset.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/tutorDashboard/Sidebar";

import DashboardClasses from "./components/Dashboard/DashboardClasses.jsx"
import DashboardPayments from "./components/Dashboard/DashboardPayments.jsx"
import MainContent from "./components/tutorDashboard/MainContent";
import StudentView from "./components/tutorDashboard/StudentSection";
import Settings from "./components/tutorDashboard/SettingSection";
import KuppiGroups from "./components/KuppiGroups/KuppiGroups.jsx";
import QuestionForm from "./components/KuppiGroups/QuestionForm.jsx";
import FindTutor from "./components/FindATutor";
import StudentCourses from "./components/StudentDashboard/StudentCourses.jsx"
import Communities from "./components/KuppiGroups/Communities.jsx";


// import KuppiGroups from "./components/KuppiGroups";
// import SelectingSubjects from "./components/Parent/Student/SelectingSubjects";




function App() {
  return (
    <>
      <div className="App"> 
        {/* <Navbar /> */}
        {/* <BecomeATutor />*/}
        {/* <StudentSignUp/> */}
        {/* <HomePage /> */}
        {/* <SelectingSubjects /> */}
        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        {/* <SignInAuth/> */}
        {/* <ResetPassword/> */}
        {/* <DashboardClasses/> */}

        {/* <KuppiGroups/> */}
        {/* <QuestionForm /> */}

        {/* <KuppiGroups/> */}
        {/* <StudentCourses/> */}

          {/* <Sidebar/> */}
          {/* <FindTutor/> */}
        
        
        {/* { <Router>
          <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/homepage" element={<HomePage/>}/>
              <Route path="/find-tutor" element={<FindTutor/>}/>
              <Route path="/courses" element={<KuppiGroups/>}/>
              <Route path="/become-tutor" element={<BecomeATutor />}/>
            </Routes>
          </div>
        </Router> } */}

      
          {/* <Communities/> */}

      
    
      
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
     
     {/* </div> */}
    

         {/* <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TutorSignUpQuestions" element={<TutorSignUpQuestions />} />
            <Route path="/TutorSignUpOptions" element={<TutorSignUpOptions />} />
            <Route path="/StudentSignUpQuestions" element={<StudentSignUpQuestions />} />
            <Route path="/StudentSignUpOptions" element={<StudentSignUpOptions />} />
            <Route path="/ParentSignUpQuestions" element={<ParentSignUpQuestions />} />
            <Route path="/ParentSignUpOptions" element={<ParentSignUpOptions />} />
            <Route path="/SignIn" element={<SignInAuth />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
          </Routes>
        </Router>  */}
      </div>
      </>
  );
}

export default App;
