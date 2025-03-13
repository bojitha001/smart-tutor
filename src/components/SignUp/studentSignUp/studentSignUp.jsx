import { SignUp } from "@clerk/clerk-react";
import styles from "../../../.ExternalCss/StudentSignUpPage.module.css";

export const StudentSignUp = () => {
  return (
    <>
      <div className={`${styles["sign-up-container"]}`}>
        <SignUp />
      </div>;
    </>
  );
};
