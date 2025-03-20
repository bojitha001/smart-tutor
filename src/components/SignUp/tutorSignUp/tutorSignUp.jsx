import { SignUp, useAuth } from "@clerk/clerk-react";
import styles from "../../../.ExternalCss/TutorSignUpPage.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TutorSignUp = () => {
  const { isSignedIn, userId, getToken } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const updateUserRole = async () => {
      if (isSignedIn && userId) {
        try {
          const token = await getToken();

          const response = await fetch('/api/users/update-role', {
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

          if(response.ok){
            navigate('/tutor-dashboard');
          } else {
            alert('Failed to set tutor role');
          }
        } catch (error) {
          console.error('Error setting tutor role:', error);
        }
      }
    };

    updateUserRole();
  }, [isSignedIn, userId, getToken, navigate]);

  return (
    <>
      <div className={`${styles["sign-up-container"]}`}>
        <SignUp/>
      </div>
    </>
  );
};
