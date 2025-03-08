import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup , sendEmailVerification} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import styles from "../../../.ExternalCss/TutorSignUpOptions.module.css";
import smartTutorImage from "../../../assets/images/smartTutor.svg";
import signUpImage from "../../../assets/images/signupPage.svg";
import googleImage from "../../../assets/images/google.png";

export const TutorSignUpOptions = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const data = sessionStorage.getItem("signUpData");
    if (data) setUserData(JSON.parse(data));
  }, []);

  const saveUserToFirestore = async (user) => {
    if (!userData) return;
    const tutorRef = doc(db, "TutorDetails", user.uid); // Create a reference to the tutor collection
    const userRef = doc(db, "UserDetails", user.uid); // Create a reference to the tutor collection
    const userExist = await getDoc(userRef);
    if (userExist.exists()) {
      //Checks whether an account with the respective email already exists
      console.log("An account with this email already exists!");
      alert("An account with this email already exists!");
      return;
    }
    const userDataToSave = {
      uid: user.uid,
      ...userData,
      email: user.email,
      createdAt: new Date(),
    };

    await setDoc(userRef, userDataToSave);
    await setDoc(tutorRef, userDataToSave);
    alert("Account created successfully!");

    // Clear session storage after signup
    sessionStorage.clear();
    
    // Navigate to HomePage
    navigate("/");
  };

  //Sign Up with Email and Password
  const signUp = async (e) => {
    e.preventDefault(); // Stop form from reloading the page
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // If a user is already signed in, sign them out
      if (auth.currentUser) {
        await auth.signOut();
      }

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      await saveUserToFirestore(user);

      // Send verification email
      await sendEmailVerification(user);
      alert("A verification email has been sent. Please check your inbox and verify your email before logging in.");

      // Sign out the user to prevent auto sign-in
      await auth.signOut();

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //Sign Up with Google
  const signUpWithGoogle = async () => {
    try {
      // If a user is already signed in, sign them out
      if (auth.currentUser) {
        await auth.signOut();
      }

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await saveUserToFirestore(user);

      // Send verification email
      await sendEmailVerification(user);
      alert("A verification email has been sent. Please check your inbox and verify your email before logging in.");

      // Sign out the user to prevent auto sign-in
      await auth.signOut();

      // Navigate to Sign-In page
      navigate("/SignIn");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  if (!userData) return <p>Loading...</p>;

  return (
    <div className={`${styles["main-card"]}`}>
      <div className={`row g-3 m-2 p-3 ${styles["grid"]}`}>
        <div
          className={` text-white ${styles["descrip-card-signUp"]}`}
        >
          <div>
            <img
              className={`${styles["smartTutor-Img"]}`}
              src={smartTutorImage}
              alt=""
            />
            <h3 className={`${styles["sub-titles-signUp"]}`}>
              Empower Your Learning Journey{" "}
            </h3>
            <h3 className={`${styles["sub-titles-signUp"]}`}>Join Us Today!</h3>
          </div>
          <br />
          <div className={`${styles["descrip-signUp"]}`}>
            Join us to unlock new skills and advance with hands-on learning and
            expert guidance. Start transforming your abilities today!
          </div>
          <img className={`${styles["signUp-Img"]}`} src={signUpImage} alt="" />
        </div>
        <div className={` ${styles["signUp-form-conatainer"]}`}>
        <div className={` ${styles["signUp-form"]}`}>
          <form className="row g-5" onSubmit={signUp}>
            <h3 className={`text-center ${styles["form-topic"]}`}>
              Let's Keep in Touch!
            </h3>
            <div className="col-md-12">
              <label className={`${styles["form-label"]}`}>Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className={`${styles["form-label"]}`}>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className={`${styles["form-label"]}`}>
                Confirm Password
              </label>
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
                className={`btn w-100 btn-lg ${styles["create-account-button"]}`}
              >
                Create Account
              </button>
            </div>
            <div className="col-12 text-center">
              <p>OR</p>
              <button
                type="button"
                className={`btn btn-lg ${styles["create-google-account-button"]}`}
                onClick={signUpWithGoogle}
              >
                {" "}
                <img
                  className={`${styles["google-Img"]}`}
                  src={googleImage}
                  alt=""
                />
                Sign Up with Google
              </button>
              <p className={`${styles["signUp-terms"]}`}>
                By clicking continue, you agree to our Terms of Services and
                Privacy Policy.
              </p>
            </div>
            <div className="text-center">
              Already have an account ?&nbsp;&nbsp;
              <span className="text-primary">
                <a
                  href=""
                  className={`text-decoration-none ${styles["login-tag"]}`}
                  onClick={() => navigate("/SignIn")}
                >
                  Login
                </a>
              </span>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};
