import React from "react";
import { Link } from "react-router-dom"; // Fixed import (was "react-router")
import styles from "../.ExternalCss/BecomeATutor.module.css";
import becomATutorImg from "../assets/images/BecomeATutor.png";
import enhancedSecurity from "../assets/images/Enhanced Security.png";
import studentMonitoring from "../assets/images/Student Monitoring.png";
import instantPayment from "../assets/images/Instant Payment.png";
import avatar1 from "../assets/images/Avatar1.jpg";
import avatar2 from "../assets/images/Avatar2.jpg";
import Footer from "./Footer";

const BecomeATutor = () => {
  return (
    <>
      <div className={`${styles["become-a-tutor-main"]}`}>
        <div className={`${styles["become-a-tutor-container1"]}`}>
          <div className={`${styles["become-a-tutor-container1-left"]}`}>
            <h1>
              <span className={`${styles["heading-primary-main"]}`}>Become a </span> 
              <span className={`${styles["heading-primary-sub"]}`}> 
                SMART <span className={`${styles["heading-primary-sub-tutor"]}`}>TUTOR</span> 
              </span>
            </h1>
            <p className={`${styles["heading-secondary"]}`}>  
              Teaching on Smart Tutor: Simplify, Engage, Inspire...
            </p>
            <div className={`${styles["become-a-tutor-timeline"]} `}>  
              <div className={`${styles["become-a-tutor-timeline-box"]} ${styles["box-1"]}`}>1</div>
              <div className={`${styles["become-a-tutor-timeline-box"]} ${styles["box-2"]}`}>2</div>
              <div className={`${styles["become-a-tutor-timeline-box"]} ${styles["box-3"]}`}>3</div>
            </div>

            <div className={`${styles["become-a-tutor-third-shadow"]}`}> 
              <div className={`${styles["timeline-txt-1"]}`}> 
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-1-span-1"]}`}> 
                  Sign Up  
                </span>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-1-span-2"]}`}>
                  to create your tutor profile
                </span>
              </div>
              <div className={`${styles["timeline-txt-2"]}`}>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-1-span-1"]}`}>
                  Get Approved
                </span>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-2-span-2"]}`}>
                  by our team
                </span>
              </div>
              <div className={`${styles["timeline-txt-3"]}`}>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-3-span-1"]}`}>
                  Start Learning
                </span>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-3-span-2"]}`}>
                  by teaching students all over the country!
                </span>
              </div>
            </div>

            <Link to="/tutorInput">
              <button className={`${styles["become-a-tutor-main-button"]}`}>
                Create a Tutor Profile
              </button>
            </Link>
          </div>

          <div className={`${styles["become-a-tutor-container1-right"]}`}>
            <img src={becomATutorImg} alt="Become a Tutor Illustration" />
          </div>
        </div>
      </div>

      <div className={`${styles["become-a-tutor-second"]}`}>
        <p className={`${styles["become-a-tutor-second-main-title"]} ${styles["max-width-container"]} ${styles["secondary-titles"]}`}> 
          Benefits of Becoming a Tutor with us
        </p>

        <div className={`${styles["grid"]} ${styles["grid-3-cols"]} ${styles["max-width-container"]} ${styles["become-a-tutor-second-container"]}`}>  
          <div className={`${styles["our-benfits"]}`}> 
            <img className={`${styles["our-benfits-image"]}`} src={instantPayment} alt="Instant Payment Icon" /> 
            <div className={`${styles["our-benfits-content"]}`}> 
              <p className={`${styles["our-benfits-title"]}`}>Instant Payment</p> 
              <p className={`${styles["our-benfits-des"]}`}> 
                Effortless, real-time fee processing for quick and easy
                transactions.
              </p>
            </div>
          </div>

          <div className={`${styles["our-benfits"]}`}>
            <img className={`${styles["our-benfits-image"]}`} src={enhancedSecurity} alt="Enhanced Security Icon" />
            <div className={`${styles["our-benfits-content"]}`}>
              <p className={`${styles["our-benfits-title"]}`}>Enhanced Security</p>
              <p className={`${styles["our-benfits-des"]}`}>
                Robust protections to safeguard data and ensure privacy.
              </p>
            </div>
          </div>

          <div className={`${styles["our-benfits"]}`}>
            <img className={`${styles["our-benfits-image"]}`} src={studentMonitoring} alt="Student Monitoring Icon" />
            <div className={`${styles["our-benfits-content"]}`}>
              <p className={`${styles["our-benfits-title"]}`}>Student Monitoring</p>
              <p className={`${styles["our-benfits-des"]}`}>
                Comprehensive tools to track student progress, attendance, and
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["become-a-tutor-third"]}`}>
        <div className={`${styles["become-a-tutor-third-center"]} ${styles["max-width-container"]}`}>
          
          <p className={`${styles["become-a-tutor-third-shadow"]} ${styles["become-a-tutor-third-main-title"]} ${styles["max-width-container"]} `}>
            Smart Tutor solutions in numbers
          </p>
          <div className={`${styles["become-a-tutor-third-shadow"]} ${styles["max-width-container"]} ${styles.grid} ${styles["grid-4-cols"]}`}>
            <div className={`${styles["solutions-in-numbers"]}`}>  
              <p className={`${styles["solutions-in-numbers-title"]}`}>1000+</p>  
              <p className={`${styles["solutions-in-numbers-des"]}`}>Registrations</p> 
            </div>

            <div className={`${styles["solutions-in-numbers"]}`}>
              <p className={`${styles["solutions-in-numbers-title"]}`}>1000+</p>
              <p className={`${styles["solutions-in-numbers-des"]}`}>Successful works</p>
            </div>

            <div className={`${styles["solutions-in-numbers"]}`}>
              <p className={`${styles["solutions-in-numbers-title"]}`}>50+</p>
              <p className={`${styles["solutions-in-numbers-des"]}`}>Centers</p>
            </div>

            <div className={`${styles["solutions-in-numbers"]}`}>
              <p className={`${styles["solutions-in-numbers-title"]}`}>100+</p>
              <p className={`${styles["solutions-in-numbers-des"]}`}>Partners</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["become-a-tutor-fourth"]}`}>  
        <p className={`${styles["become-a-tutor-fourth-main-title"]} ${styles["max-width-container"]} ${styles["secondary-titles"]}`}> 
          Our Tutors' success stories
        </p>
        <div className={`${styles["grid"]} ${styles["grid-2-cols"]} ${styles["max-width-container"]}`}>
          <div className={`${styles["success-stories-content"]}`}> 
            <p className={`${styles["success-stories-title"]}`}>  
              "Revolutionized Our Training Process, Increased Course
              Completions, and Enhanced Learner Engagement Beyond Expectations"
            </p>
            <p className={`${styles["success-stories-des"]}`}>  
              Smart Tutor has transformed our training process with its
              user-friendly interface and powerful features. Creating and
              managing courses is now effortless. Since adopting it, we've
              achieved a 40% increase in course completions and improved learner
              engagement. The advanced analytics and live session tools have
              been game-changers. We highly recommend Smart Tutor for any
              organization seeking an innovative LMS solution!
            </p>
            <img className={`${styles["success-stories-img"]}`} src={avatar1} alt="Tutor Avatar" />
          </div>

          <div className={`${styles["success-stories-content"]}`}>
            <p className={`${styles["success-stories-title"]}`}>
              "Revolutionized Our Training Process, Increased Course
              Completions, and Enhanced Learner Engagement Beyond Expectations"
            </p>
            <p className={`${styles["success-stories-des"]}`}>
              Smart Tutor has transformed our training process with its
              user-friendly interface and powerful features. Creating and
              managing courses is now effortless. Since adopting it, we've
              achieved a 40% increase in course completions and improved learner
              engagement. The advanced analytics and live session tools have
              been game-changers. We highly recommend Smart Tutor for any
              organization seeking an innovative LMS solution!
            </p>
            <img className={`${styles["success-stories-img"]}`} src={avatar2} alt="Tutor Avatar" />
          </div>
        </div>
      </div>

      <div className={`${styles["become-a-tutor-fifth"]}`}>  
        <div className={`${styles["become-a-tutor-fifth-container"]}`}>  
          <p className={`${styles["connect-title"]}`}>Let's Connect</p>  
          <p className={`${styles["connect-des"]}`}>
            Feel free to reach out if you need high-volume licenses, academic
            and freelance discounts, or want a custom quote. We'll get back to
            you shortly!
          </p>
          <Link to="/contact-us" className={`${styles["btn"]} ${styles["btn-connect"]}`}>
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

export default BecomeATutor;