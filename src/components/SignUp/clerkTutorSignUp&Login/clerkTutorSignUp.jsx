import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignUp } from "@clerk/clerk-react";

export const ClerkTutorSignUp = () => {

  return (
    <>
      <div className="flex justify-center items-center">
        <SignUp />
      </div>;
    </>
  );
};
