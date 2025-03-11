import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";

export const ClerkLogin = () => {

  return (
    <>
      <div className="flex min-h screen justify-center items-center">
        <SignIn />
      </div>;
    </>
  );
};
