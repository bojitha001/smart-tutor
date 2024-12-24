import { useState } from "react";
import { auth, googleProvider, db } from "../config/firebase";
import {createUserWithEmailAndPassword, SignInMethod, signInWithPopup} from 'firebase/auth';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import '../.ExternalCss/SignUpPage.css';
import smartTutorImage from "../assets/images/smartTutor.svg";
import signUpImage from "../assets/images/signupPage.svg";

export const SignUpAuth = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const saveUserToFirestore = async (user) => {
        const userRef = doc(db, "UserDetails", user.uid); // Create a reference to the user document
        const userExist = await getDoc(userRef);
        if(userExist.exists()){//Checks whether an account with the respective email already exists
            console.log("An account with this email already exists!");
            alert("An account with this email already exists!");
            return;
        }
        else{
            await setDoc(userRef, {
                uid: user.uid,
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                phoneNumber: phoneNumber,
                email: user.email,
                createdAt: new Date() 
            });
            alert("Account created successfully!");
        }
    };

    //Sign Up with Email and Password
    const signUp = async(e) => {
        e.preventDefault(); // Stop form from reloading the page
        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        try{
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            await saveUserToFirestore(user);
        }
        catch(err){
            console.error(err);
            alert(err.message);
        }
    }

    //Sign Up with Google
    const signUpWithGoogle = async() => {
        try{
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            
            await saveUserToFirestore(user);
        }
        catch(err){
            console.error(err);
            alert(err.message);
        }
    }

    return(
        <>
        <div className="row g-3 m-2 p-4">
            <div className="col-md-5 p-5 text-white rounded descrip-card-signUp">
                <div>
                    <img className="smartTutor-Img" src={smartTutorImage} alt="" />
                    <h3 className="sub-titles-signUp">Empower Your Learning </h3>
                    <h3 className="sub-titles-signUp">Journey - Join Us Today!</h3>
                </div><br/>
                <div className="descrip-signUp">Join us to unlock new skills and advance with hands-on learning and expert guidance. Start transforming your abilities today!</div>
                <img className="signUp-Img" src={signUpImage} alt="" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 signUp-form">
                <form className="row g-5" onSubmit={signUp}>
                <h3 className="text-center">Let's get started !</h3>

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
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                    I agree to the Terms and Privacy Policy and accept responsibility for 
                    my account's security
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
                <div className="text-center">Already have an account ?&nbsp;&nbsp;<span className="text-primary"><a href="#" className="text-decoration-none">Login</a></span></div>
                </form>
            </div>
        </div>
        </>
    );
}