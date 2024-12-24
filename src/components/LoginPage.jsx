import { useState } from "react";
import { auth, googleProvider, db } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import '../.ExternalCss/LoginPage.css';
import smartTutorImage from '../assets/images/smartTutor.svg';
import signInImage from '../assets/images/mainImg.png';

export const SignInAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Sign In with Email and Password
    const signIn = async(e) => {
        e.preventDefault(); // Stop form from reloading the page
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch(err){
            console.error(err);
        }
    }

    //Sign In with Google
    const signInWithGoogle = async() => {
        try{
            await signInWithPopup(auth, googleProvider);
        }
        catch(err){
            console.error(err);
        }
    }
    
    return(
        <>
        <div className="row g-5 m-2 p-4">
        <div className="col-md-1"></div>
            <div className="col-md-6 signIn-form">
            <   div>
                    <img className="smartTutor-Img" src={smartTutorImage} alt="" />
                    <h3 className="sub-titles-signIn">Start Your Journey with SmartTutor</h3>
                </div><br/>
                <form className="row g-3" onSubmit={signIn}>
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
                <div className="col-md-12">
                    <label className="form-label">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                    Remember me<br></br>
                    <span>Save my login details for next time</span>
                    </label>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary w-100">
                        Sign In
                    </button>
                </div>
                <div className="col-12 text-center">
                    <p>OR</p>
                    <button
                    type="button"
                    className="btn btn-primary"
                    onClick={signInWithGoogle}
                    >
                        Sign In with Google
                    </button>
                </div>
                <div className="text-center">Don't have an account ?&nbsp;&nbsp;<span className="text-primary"><a href="#" className="text-decoration-none">Sign up</a></span></div>
                </form>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 p-5 text-white rounded descrip-card-signIn">
                <img className="signIn-Img" src={signInImage} alt="" />
            </div>
        </div>
        </>
    );
}