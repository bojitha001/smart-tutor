import React from "react";
import styles from "../../.ExternalCss/StudentSignUp.module.css";
import signUpmainImg from "../../assets/images/SignupSt.png";

const StudentSignUp = () => {
  return (
    <div className={`${styles["student-signup-main"]}`}>
      <div className={`${styles["student-signup-main-inside"]}`}>
        <div className={`${styles["student-signup-main-inside-left"]}`}>
          <p className={`${styles["student-signup-main-tutor-txt-1"]}`}>SMART <span className={`${styles["student-signup-main-tutor-txt-span"]}`}>TUTOR</span></p>
          <p className={`${styles["student-signup-main-tutor-txt-2"]}`}>Transform Your Skills with Us !</p>
          <p className={`${styles["student-signup-main-tutor-txt-3"]}`}>
            Join us to unlock new skills and advance with hands-on learning and
            expert guidance. Start transforming your abilities today!
          </p>
          <img
            className={`${styles["student-signup-main-inside-left-img"]}`}
            src={signUpmainImg}
            alt=""
          />
        </div>
        <div className={`${styles["student-signup-main-inside-right"]}`}>
            <p className={`${styles["student-signup-main-inside-txt-1"]}`}>Let's grt started</p>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
