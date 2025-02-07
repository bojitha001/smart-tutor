import React from "react";
import styles from "../../.ExternalCss/StudentSignUp.module.css";

const StudentSignUp = () => {
  return (
    <div className={`${styles["student-signup-main"]}`}>
      <div className={`${styles["student-signup-main-inside"]}`}>
        <div className={`${styles["student-signup-main-inside-left"]}`}>
        <p>SMART TUTOR</p>
        <p>Transform Your Skills with Us !</p>
        <p>
          Join us to unlock new skills and advance with hands-on learning and
          expert guidance. Start transforming your abilities today!
        </p><img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
