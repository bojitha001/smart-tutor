import React from 'react';
import styles from '../.ExternalCss/mainSign.module.css';
import img from '../assets/images/ChooseSign.png';
import { useNavigate } from "react-router-dom";

const MainSign = () => {
    const navigate = useNavigate(); // Initialize navigation
    
    return (
        <div className={`${styles["main-container"]}`}>
            <div className={`${styles["main-container-left"]}`}>
                <img className={`${styles["main-img"]}`} src={img} alt="" />
            </div>
            <div className={`${styles["main-container-right"]}`}>
                <div className={`${styles["choose-sign-up"]}`}>
                    <div>
                        <button onClick={() => navigate("/tutor-sign-up")}>
                            Tutor
                        </button>
                    </div>
                </div>
                <div className={`${styles["choose-sign-up"]}`}>
                    <div>
                        <button onClick={() => navigate("/student-sign-up")}>
                            Student
                        </button>
                    </div>
                </div>
                {/* <div className={`${styles["choose-sign-up"]}`}>
                    <div>
                        <button onClick={() => navigate("/parent-sign-up")}>
                            Parent
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default MainSign;

