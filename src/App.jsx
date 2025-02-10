import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignInAuth } from "./components/LoginPage";
import { SignUpOptions } from "./components/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";


import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "./components/tutorDashboard/Sidebar";



function App() {
  return (
    <>
      <div className="App">
         {/* <Navbar /> */}
        {/* <BecomeATutor />  */}
        {/* <Sidebar /> */}
        {/* <HomePage /> */}
        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        <SignInAuth/>
        
        
          {/* <Sidebar/> */}
        
        

      </div>
      
    </>
  );
}

export default App;
