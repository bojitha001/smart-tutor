import { SignUp } from "@clerk/clerk-react";
import styles from "../../../.ExternalCss/TutorSignUpPage.module.css";

export const TutorSignUp = () => {
  return (
    <>
      <div className={`${styles["sign-up-container"]}`}>
        <SignUp />
      </div>;
    </>
  );
};
