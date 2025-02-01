import { useState } from "react";
import { auth, googleProvider, db } from "../../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import '../../.ExternalCss/SignUpOptions.css';
import smartTutorImage from "../../assets/images/smartTutor.svg";
import signUpImage from "../../assets/images/signupPage.svg";
import googleImage from "../../assets/images/google.png";

export const SignUpOptions = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    const firstName = props.firstName;
    const lastName = props.lastName;
    const dateOfBirth = props.dateOfBirth;
    const phoneNumber = props.phoneNumber;
    const gender = props.gender;
    const degree = props.degree;
    const [email, setEmail] = useState("");
    // const [gender, setGender] = useState("");
    // const [degree, setDegree] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const saveUserToFirestore = async (user) => {
        const userRef = doc(db, "TutorDetails", user.uid); // Create a reference to the user document
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
                gender: gender,
                degree: degree,
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
        <div className="row g-3 m-2 p-3">
            <div className="col-md-5 p-5 text-white descrip-card-signUp">
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
                    <h3 className="text-center form-topic">Let's Keep in Touch!</h3>
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
                    <div className="col-12 text-center">
                        <button 
                            type="submit" 
                            className="btn w-100 btn-lg create-account-button"
                        >
                            Create Account
                        </button>
                    </div>
                    <div className="col-12 text-center">
                        <p>OR</p>
                        <button
                            type="button"
                            className="btn btn-lg create-google-account-button"
                            onClick={signUpWithGoogle}
                        >  <img className="google-Img" src={googleImage} alt="" />
                            Sign Up with Google
                        </button>
                        <p className="signUp-terms">By clicking continue, you agree to our Terms of<br></br> Services and Privacy Policy.</p>
                    </div>
                    <div className="text-center">Already have an account ?&nbsp;&nbsp;<span className="text-primary"><a href="#" className="text-decoration-none">Login</a></span></div>
                </form>
            </div>
        </div>
        </>
    );
}