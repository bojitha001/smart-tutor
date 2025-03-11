import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, sendEmailVerification } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; //Import Firestore functions
import { Link } from "react-router-dom";

import styles from "../.ExternalCss/LoginPage.module.css";
import smartTutorImage from "../assets/images/smartTutor.svg";
import signInImage from "../assets/images/mainImg.png";
import googleImage from "../assets/images/google.png";

export const ClerkLogin = () => {
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

      //Check if email is verified before proceeding
      if (!user.emailVerified) {
        alert("Your email is not verified! Please check your inbox.");
        return; // Stop login if email is not verified
      }

      const userRef = doc(db, "UserDetails", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        console.log("User details from Firestore:", userDoc.data());
        alert("Welcome back, " + userDoc.data().firstName);
        
        // Navigate based on user role
        if (userDoc.data().role === "tutor") {
          navigate("/tutor-dashboard");
        } else if (userData.role === "student") {
          navigate("/student-dashboard");
        } else if (userData.role === "parent") {
          navigate("/parent-dashboard");
        } else {
          alert("Invalid user role. Contact support.");
        }

      } else {
        alert("User authenticated but no details found in Firestore.");
      }

      //Navigate to the homepage
      navigate("/");

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

        // Navigate based on user role
        if (userDoc.data().role === "tutor") {
          navigate("/tutor-dashboard");
        } else if (userData.role === "student") {
          navigate("/student-dashboard");
        } else if (userData.role === "parent") {
          navigate("/parent-dashboard");
        } else {
          alert("Invalid user role. Contact support.");
        }

      } else {
        alert("User authenticated but no details found in Firestore.");
      }

      //Navigate to the homepage
      navigate("/");

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
      <div className={`${styles.loginPageMainContainer} row g-5 p-4`}>
        <div className={`col-md-6 ${styles.loginPageSignInForm}`}>
          <div className={`${styles.loginPageSignInFormLeft}`}>
            <img
              className={`${styles.smartTutorImg}`}
              src={smartTutorImage}
              alt=""
            />
            <h3 className={`${styles.subTitlesSignIn}`}>
              Start Your Journey with SmartTutor
            </h3>
          </div>
          <br />
          <form className={`row g-3 ${styles["signIn-form"]}`} onSubmit={signIn}>
            <div className={`col-md-12`}>
              <label className={`${styles["form-label"]}`}>Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={`col-md-12`}>
              <label className={`${styles["form-label"]}`}>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={`col-12 text-center`}>
              <button
                type="submit"
                className={`btn btn-primary w-100 ${styles.loginButtons}`}
              >
                Sign In
              </button>
            </div>
            <div className={`col-12 text-center`}>
              <p className={`${styles["signIn-or"]}`}>OR</p>
              <button
                type="button"
                className={`btn btn-lg ${styles["signIn-google-account-button"]}`}
                onClick={signInWithGoogle}
              >
                <img
                  className={`${styles["google-Img"]}`}
                  src={googleImage}
                  alt=""
                />
                Sign Up with Google
              </button>
            </div>
            <div className={`text-center ${styles["signIn-terms"]}`}>
              Don't have an account ?&nbsp;&nbsp;
              <span className={`text-primary`}>
                <Link to="/signup" className={`text-decoration-none`}>Sign Up</Link>
              </span>
            </div>
          </form>
        </div>
        <div
          className={`col-md-4 p-5 text-white rounded ${styles.descripCardSignIn}`}
        >
          <img
            className={`${styles.loginPageSignInImg}`}
            src={signInImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
