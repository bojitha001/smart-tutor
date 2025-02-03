// import "./App.css";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import styles from "../src/.ExternalCss/TutorMainView.module.css";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInAuth } from "./components/LoginPage";
import { SignUpOptions } from "./components/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import { ResetPassword } from "./components/tutorSignUp/PasswordReset";
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "./components/tutorDashboard/Sidebar";
import MainContent from "./components/tutorDashboard/MainContent";
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
        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        {/* <SignInAuth/> */}
        {/* <ResetPassword/> */}
        
        
          {/* <Sidebar/> */}
        
        

      </div>


      {/* <Router>
      <div className={styles.app}>
        <Sidebar />
        <MainContent/>
      </div>
    </Router> */}
      
      
    </>
  );
}

export default App;
