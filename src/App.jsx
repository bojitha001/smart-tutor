import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignUpOptions } from "./components/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import Test from "./components/Test";
import Test1 from "./components/tutorDashboard/Test1";
import Sidebar from "./components/tutorDashboard/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="App">
         {/* <Navbar /> */}
        {/* <BecomeATutor />  */}
        {/* <Sidebar/> */}
        {/* <HomePage /> */}

        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        {/* <Test/> */}
        {/* <Test1/> */}
        <Router>
          <Sidebar/>
        </Router>
        

      </div>
      
    </>
  );
}

export default App;
