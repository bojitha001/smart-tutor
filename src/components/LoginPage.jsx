import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
import styles from "../../../.ExternalCss/clerkLogin.module.css"

export const Login = () => {
  return (
    <>
      <div className={`${styles['sign-in-container']}`}>
        <SignIn />
      </div>;
    </>
  );
};
