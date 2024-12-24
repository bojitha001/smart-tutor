import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import "../.ExternalCss/SignUp.css";
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const SignUpAuth = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Sign Up with Email and Password
    const signUp = async(e) => {
        e.preventDefault(); // Stop form from reloading the page
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch(err){
            console.error(err);
        }
    }

    //Sign Up with Google
    const signUpWithGoogle = async() => {
        try{
            await signInWithPopup(auth, googleProvider);
        }
        catch(err){
            console.error(err);
        }
    }
    
    return(
        
        <div className="row g-3 p-2 container-main">
        <div className="col-md-5 p-5 bg-primary text-white rounded">
          <div className="main-txt">
          <div class="logo">
        <p>
          SMART<span class="smart">TUTOR</span>
        </p>
      </div>
            <h3 className="main-title">Empower Your Learning</h3>
            <h3 className="main-title">Journey - Join Us Today!</h3>
          </div>
          <br />
          <p className="main-description">
          Join us to unlock new skills and advance with hands-on learning and expert guidance. Start transforming your abilities today!
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 container-left">
          <form className="row g-3" onSubmit={signUp}>
            <h3 className="text-center">Let's get started!</h3>
  
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input
                className="form-control"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                I agree to the Terms and Privacy Policy and accept responsibility
                for my account's security
              </label>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary w-100">
                Create Account
              </button>
            </div>
  
            <div className="col-12 text-center">
              <p>OR</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={signUpWithGoogle}
              >
                Sign Up with Google
              </button>
            </div>
            <div className="text-center">
              Already have an account?&nbsp;&nbsp;
              <span className="text-primary">
                <a href="#" className="text-decoration-none">
                  Login
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
      
    );
}