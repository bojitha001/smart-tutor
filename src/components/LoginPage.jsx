import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; //Import Firestore functions
import styles from "../.ExternalCss/LoginPage.module.css";
import smartTutorImage from "../assets/images/smartTutor.svg";
import signInImage from "../assets/images/mainImg.png";

export const SignInAuth = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Sign In with Email and Password
  const signIn = async (e) => {
    e.preventDefault(); // Stop form from reloading the page
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = doc(db, "UserDetails", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        console.log("User details from Firestore:", userDoc.data());
        alert("Welcome back, " + userDoc.data().firstName);
      } else {
        alert("User authenticated but no details found in Firestore.");
      }
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("No user found with this email. Please sign up first.");
      } else if (err.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else {
        alert("Error signing in: " + err.message);
      }
      console.error(err);
    }
  };

  //Sign In with Google
  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      const userRef = doc(db, "UserDetails", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        console.log("User details from Firestore:", userDoc.data());
        alert("Welcome back, " + userDoc.data().firstName);
      } else {
        alert("User authenticated but no details found in Firestore.");
      }
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("No user found with this email. Please sign up first.");
      } else if (err.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else {
        alert("Error signing in: " + err.message);
      }
      console.error(err);
    }
  };

  return (
    <>
      <div className={`${styles.loginPageMainContainer} row g-5 m-2 p-4`}>
        {/* <div className="col-md-1"></div> */}
        <div className={`col-md-6 ${styles.loginPageSignInForm}`}>
          <div className={`${styles.loginPageSignInFormLeft}`}>
            <img className={`${styles.smartTutorImg}`} src={smartTutorImage} alt="" />
            <h3 className={`${styles.subTitlesSignIn}`}>
              Start Your Journey with SmartTutor
            </h3>
          </div>
          <br />
          <form className={`row g-3`} onSubmit={signIn}>
            <div className={`col-md-12`}>
              <label className={`form-label`}>Email</label>
              <input
                className={`form-control`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={`col-md-12`}>
              <label className={`form-label`}>Password</label>
              <input
                type="password"
                className={`form-control`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={`form-check`}>
              <input
                className={`form-check-input`}
                type="checkbox"
                id="flexCheckChecked"
                defaultChecked
              />
              <label className={`form-check-label`} htmlFor="flexCheckChecked">
                Remember me<br></br>
                <span>Save my login details for next time</span>
              </label>
            </div>
            <div className={`col-12 text-center`}>
              <button type="submit" className={`btn btn-primary w-100 ${styles.loginButtons}`}>
                Sign In
              </button>
            </div>
            <div className={`col-12 text-center`}>
              <p>OR</p>
              <button
                type="button"
                className={`btn btn-primary ${styles.loginButtons}`}
                onClick={signInWithGoogle}
              >
                Sign In with Google
              </button>
            </div>
            <div className={`text-center`}>
              Don't have an account ?&nbsp;&nbsp;
              <span className={`text-primary`}>
                <a href="#" className={`text-decoration-none`} onClick={() => navigate("/TutorSignUpQuestions")}>
                  Sign up
                </a>
              </span>
            </div>
          </form>
        </div>
        {/* <div className="col-md-1"></div> */}
        <div className={`col-md-4 p-5 text-white rounded ${styles.descripCardSignIn}`}>
          <img className={`${styles.loginPageSignInImg}`} src={signInImage} alt="" />
        </div>
      </div>
    </>
  );
};
