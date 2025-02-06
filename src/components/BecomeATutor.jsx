import React from "react";

import styles from "../.ExternalCss/BecomeATutor.module.css";
import becomATutorImg from "../assets/images/BecomeATutor.png";
import enhancedSecurity from "../assets/images/Enhanced Security.png";
import studentMonitoring from "../assets/images/Student Monitoring.png";
import instantPayment from "../assets/images/Instant Payment.png";
import avatar1 from "../assets/images/Avatar1.jpg";
import avatar2 from "../assets/images/Avatar2.jpg";

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
            <div className={`${styles["become-a-tutor-timeline"]} row`}>  
              <div className={`${styles["become-a-tutor-timeline-box"]} ${styles["box-1"]}`}>1</div>
              <div className={`${styles["become-a-tutor-timeline-box"]} ${styles["box-2"]}`}>2</div>
              <div className={`${styles["become-a-tutor-timeline-box"]} ${styles["box-3"]}`}>3</div>
            </div>

            <div className={`${styles["become-a-tutor-third-shadow"]} row`}> 
              <div className={`${styles["timeline-txt-1"]} col`}> 
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-1-span-1"]} col`}> 
                  Sign Up  
                </span>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-1-span-2"]} col`}>
                  to create your tutor profile
                </span>
              </div>
              <div className={`${styles["timeline-txt-2"]} col`}>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-1-span-1"]} col`}>
                  Get Approved
                </span>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-2-span-2"]} col`}>
                  by our team
                </span>
              </div>
              <div className={`${styles["timeline-txt-3"]} col`}>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-3-span-1"]} col`}>
                  Start Learning
                </span>
                <span className={`${styles["timeline-txt-1-span"]} ${styles["timeline-txt-3-span-2"]} col`}>
                  by teaching students all over the country!
                </span>
              </div>
            </div>

            <button className={`${styles["become-a-tutor-main-button"]}`}>
              Create a Tutor Profile
            </button>
          </div>

          <div className={`${styles["become-a-tutor-container1-right"]}`}>
            <img src={becomATutorImg} alt="" />
          </div>
        </div>
      </div>

      <div className={`${styles["become-a-tutor-second"]}`}>
        <p className={`${styles["become-a-tutor-second-main-title"]} ${styles["max-width-container"]} ${styles["secondary-titles"]}`}> 
          Benefits of Becoming a Tutor with us
        </p>

        <div className={`${styles["grid"]} ${styles["grid-3-cols"]} ${styles["max-width-container"]} ${styles["become-a-tutor-second-container"]}`}>  
          <div className={`${styles["our-benfits"]}`}> 
            <img className={`${styles["our-benfits-image"]}`} src={instantPayment} alt="" /> 
            <div className={`${styles["our-benfits-content"]}`}> 
              <p className={`${styles["our-benfits-title"]}`}>Instant Payment</p> 
              <p className={`${styles["our-benfits-des"]}`}> 
                Effortless, real-time fee processing for quick and easy
                transactions.
              </p>
            </div>
          </div>

          <div className={`${styles["our-benfits"]}`}>
            <img className={`${styles["our-benfits-image"]}`} src={enhancedSecurity} alt="" />
            <div className={`${styles["our-benfits-content"]}`}>
              <p className={`${styles["our-benfits-title"]}`}>Enhanced Security</p>
              <p className={`${styles["our-benfits-des"]}`}>
                Robust protections to safeguard data and ensure privacy.
              </p>
            </div>
          </div>

          <div className={`${styles["our-benfits"]}`}>
            <img className={`${styles["our-benfits-image"]}`} src={studentMonitoring} alt="" />
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
          
          <p className={`${styles["become-a-tutor-third-shadow"]} ${styles["max-width-container"]} ${styles.grid} ${styles["grid-4-cols"]}`}>
            Smart Tutor solutions in numbers
          </p>
          <div className={`${styles["become-a-tutor-third-shadow"]} ${styles["max-width-container"]} ${styles.grid} ${styles["grid-4-cols"]}`}>
            <div className={`${styles["solutions-in-numbers"]}`}>  
              <p className={`${styles["solutions-in-numbers-title"]}`}>1000+</p>  
              <p className={`${styles["solutions-in-numbers-des"]}`}>Registrations</p> 
            </div>

            <div className={`${styles["solutions-in-numbers"]}`}>
              <p className={`${styles["solutions-in-numbers-title"]}`}>1000+</p>
              <p className={`${styles["solutions-in-numbers-des"]}`}>Successfull works</p>
            </div>

            <div className={`${styles["solutions-in-numbers"]}`}>
              <p className={`${styles["solutions-in-numbers-title"]}`}>50+</p>
              <p className={`${styles["solutions-in-numbers-des"]}`}>Centers</p>
            </div>

            <div className={`${styles["solutions-in-numbers"]}`}>
              <p className={`${styles["solutions-in-numbers-title"]}`}>100+</p>
              <p className={`${styles["solutions-in-numbers-des"]}`}>Centers</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["become-a-tutor-fourth"]}`}>  
        <p className={`${styles["become-a-tutor-fourth-main-title"]} ${styles["max-width-container"]} ${styles["secondary-titles"]}`}> 
          Our Tutors ‘ success stories
        </p>
        <div className={`${styles["grid"]} ${styles["grid-2-cols"]} ${styles["max-width-container"]}`}>
          <div className={`${styles["success-stories-content"]}`}> 
            <p className={`${styles["success-stories-title"]}`}>  
              “Revolutionized Our Training Process, Increased Course
              Completions, and Enhanced Learner Engagement Beyond Expectations”
            </p>
            <p className={`${styles["success-stories-des"]}`}>  
              Smart Tutor has transformed our training process with its
              user-friendly interface and powerful features. Creating and
              managing courses is now effortless. Since adopting it, we’ve
              achieved a 40% increase in course completions and improved learner
              engagement. The advanced analytics and live session tools have
              been game-changers. We highly recommend Smart Tutor for any
              organization seeking an innovative LMS solution!
            </p>
            <img className={`${styles["success-stories-img"]}`} src={avatar1} alt="" />
          </div>

          <div className={`${styles["success-stories-content"]}`}>
            <p className={`${styles["success-stories-title"]}`}>
              “Revolutionized Our Training Process, Increased Course
              Completions, and Enhanced Learner Engagement Beyond Expectations”
            </p>
            <p className={`${styles["success-stories-des"]}`}>
              Smart Tutor has transformed our training process with its
              user-friendly interface and powerful features. Creating and
              managing courses is now effortless. Since adopting it, we’ve
              achieved a 40% increase in course completions and improved learner
              engagement. The advanced analytics and live session tools have
              been game-changers. We highly recommend Smart Tutor for any
              organization seeking an innovative LMS solution!
            </p>
            <img className={`${styles["success-stories-img"]}`} src={avatar2} alt="" />
          </div>
        </div>
      </div>

      <div className={`${styles["become-a-tutor-fifth"]}`}>  
        <div className={`${styles["become-a-tutor-fifth-container"]}`}>  
          <p className={`${styles["connect-title"]}`}>Let's Connect</p>  
          <p className={`${styles["connect-des"]}`}>  "connect-des"
            Feel free to reach out if you need high-volume licenses, academic
            and freelance discounts, or want a custom quote. We’ll get back to
            you shortly!
          </p>
          <a className={`${styles["btn"]} ${styles["btn-connect"]}`} href="#">  
            Contact us
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={`${styles["max-width-container"]} ${styles["grid"]} ${styles["grid-footer"]}`}> 
          <div className={`${styles["logo-col"]}`}>
            <a className={`${styles["footer-logo"]}`} href="#">
              Smart Tutor
            </a>
          </div>
          <nav class={`${styles["nav-col"]}`}>
            <p class={`${styles["footer-heading"]}`}>Company Information</p>
            <ul class={`${styles["footer-nav"]}`}>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Careers
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Tution Centers
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Become a Tutor
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  FAQs
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Site map
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Using the Online Space
                </a>
              </li>
            </ul>
          </nav>

          <nav class={`${styles["nav-col"]}`}>
            <p class={`${styles["footer-heading"]}`}>Popular Requests</p>
            <ul class={`${styles["footer-nav"]}`}>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Combined Mathematics Tutor
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Chemistry Tutor
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Physics Tutor
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Biology Tutor
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  English Tutor
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  A level Tutors
                </a>
              </li>
            </ul>
          </nav>

          <nav class={`${styles["nav-col"]}`}>
            <p class={`${styles["footer-heading"]}`}>Resources</p>
            <ul class={`${styles["footer-nav"]}`}>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Contact us
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Help center
                </a>
              </li>
              <li>
                <a class={`${styles["footer-link"]}`} href="">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default BecomeATutor;
