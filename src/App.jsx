import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css'
import { SignUpAuth } from "./components/SignUpAuth";
import { Navbar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";


function App(){
  return(
    <>
      <div className="App">
        <Navbar/>
        <HomePage/>
        {/* <SignUpAuth/> */}
      </div>
    </>
  );
}

export default App;