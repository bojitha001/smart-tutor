import { SignUp, useUser } from "@clerk/clerk-react";
import styles from "../../../.ExternalCss/ParentSignUpPage.module.css";

export const ParentSignUp = () => {
  return (
    <>
      <div className={`${styles["sign-up-container"]}`}>
        <SignUp/>
      </div>
    </>
  );
};
