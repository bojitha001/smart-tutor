import "./App.css";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { SignUpOptions} from  "./components/tutorSignUp/SignUpOptions"
import { SignUpQuestions } from "./components/tutorSignUp/SignUpQuestions";


function App(){
  return(
    <>
      <div className="App">
        {/* <Navbar/> */}
        {/* <HomePage/> */}
        <SignUpQuestions/>
        <SignUpOptions/>
      </div>
    </>
  );
}

export default App;