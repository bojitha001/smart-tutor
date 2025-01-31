import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import { SignUpAuth } from "./components/SignUpAuth";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignUpOptions } from "./components/tutorSignUp/SignUpOptions";
import { SignUpQuestions } from "./components/tutorSignUp/SignUpQuestions";
import BecomeATutor from "./components/BecomeATutor";
import SelectingSubjects from "./components/Parent/Student/SelectingSubjects";

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        {/* <BecomeATutor /> */}
        {/* <HomePage /> */}

        {/* <SignUpQuestions/> */}
        {/* <SignUpOptions/> */}
        <SelectingSubjects />
      </div>
    </>
  );
}

export default App;
