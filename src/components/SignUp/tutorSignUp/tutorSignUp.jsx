// import { SignUp, useAuth } from "@clerk/clerk-react";
// import styles from "../../../.ExternalCss/TutorSignUpPage.module.css";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export const TutorSignUp = () => {
//   const { isSignedIn, userId, getToken } = useAuth();
//   const navigate = useNavigate();

//   console.log("Component rendered", { isSignedIn, userId });
  
//   useEffect(() => {
//     const updateUserRole = async () => {
//       if (isSignedIn && userId) {
//         try {
//           const token = await getToken();

//           console.log("Sending request to:", 'http://localhost:8080/user');

//           const response = await fetch('http://localhost:8080/user', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${token}`
//             },

//             body: JSON.stringify({
//               userId,
//               role: 'tutor'
//             })
//           });

//           if(response.ok){
//             navigate('/tutor-dashboard');
//           } else {
//             alert('Failed to set tutor role');
//           }
//         } catch (error) {
//           console.error('Error setting tutor role:', error);
//         }
//       }
//     };

//     updateUserRole();
//   }, [isSignedIn, userId, getToken, navigate]);

//   return (
//     <>
//       <div className={`${styles["sign-up-container"]}`}>
//         <SignUp/>
//       </div>
//     </>
//   );
// };

import { SignUp, useSignUp, useAuth } from "@clerk/clerk-react";
import styles from "../../../.ExternalCss/TutorSignUpPage.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TutorSignUp = () => {
  const { isLoaded: isAuthLoaded, isSignedIn, userId, getToken } = useAuth();
  const { isLoaded: isSignUpLoaded, setActive } = useSignUp();
  const navigate = useNavigate();
  const [signupComplete, setSignupComplete] = useState(false);

  // Listen for auth state changes after signup
  useEffect(() => {
    if (!isAuthLoaded) return;

    // If user just completed signup and now is signed in with a userId
    if (isSignedIn && userId && signupComplete) {
      const updateUserRole = async () => {
        try {
          console.log("User is now signed in, updating role for:", userId);
          const token = await getToken();

          const response = await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              userId,
              role: 'tutor'
            })
          });

          if (response.ok) {
            console.log("Role updated successfully");
            navigate('/tutor-dashboard');
          } else {
            console.error("Failed to update role");
            alert('Failed to set tutor role');
          }
        } catch (error) {
          console.error('Error setting tutor role:', error);
        }
      };

      // Execute with a slight delay to ensure auth is fully established
      setTimeout(updateUserRole, 1000);
    }
  }, [isAuthLoaded, isSignedIn, userId, signupComplete, getToken, navigate]);

  return (
    <div className={styles["sign-up-container"]}>
      <SignUp 
        signUpCallback={() => {
          console.log("SignUp callback triggered");
          setSignupComplete(true);
        }}
      />
    </div>
  );
};
