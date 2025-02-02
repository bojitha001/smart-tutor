// import "./App.css";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import styles from "../src/.ExternalCss/Sidebar.module.css";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInAuth } from "./components/LoginPage";
import { SignUpOptions } from "./components/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import Sidebar from "./components/tutorDashboard/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from "./components/tutorDashboard/MainContent";



function App() {
  return (
    <>
    
      <div className="App">
          <Navbar />
         {/* <BecomeATutor />    */}
        {/* <Sidebar/> */}
        {/* <HomePage /> */}
        {/* <SelectingSubjects /> */}
        <SignUpQuestions/>
        {/* <SignUpOptions/> */}
        {/* <Test/> */}
        {/* <Test1/> */}
        
          {/* <Sidebar/>
          <MainContent/> */}

       
        

      </div>


      {/* <Router>
      <div className={styles.app}>
        <Sidebar />
        <MainContent />
      </div>
    </Router> */}
      
      
    </>
  );
}

export default App;
