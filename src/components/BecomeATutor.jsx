import React from "react";

import "../.ExternalCss/BecomeATutor.css";
import becomATutorImg from "../assets/images/BecomeATutor.png";
import enhancedSecurity from "../assets/images/Enhanced Security.png";
import studentMonitoring from "../assets/images/Student Monitoring.png";
import instantPayment from "../assets/images/Instant Payment.png";
import avatar1 from "../assets/images/Avatar1.jpg";
import avatar2 from "../assets/images/Avatar2.jpg";

const BecomeATutor = () => {
  return (
    <>
      <div className="become-a-tutor-main">
        <div className="become-a-tutor-container1">
          <div className="become-a-tutor-container1-left">
            <h1>
              <span className="heading-primary-main">Become a </span>
              <span className="heading-primary-sub">
                SMART <span className="heading-primary-sub-tutor">TUTOR</span>
              </span>
            </h1>
            <p className="heading-secondary">
              Teaching on Smart Tutor: Simplify, Engage, Inspire...
            </p>
            <div className="row become-a-tutor-timeline">
              <div className=" become-a-tutor-timeline-box box-1">1</div>
              <div className="become-a-tutor-timeline-box box-2">2</div>
              <div className="become-a-tutor-timeline-box box-3">3</div>
            </div>

            <div className="row become-a-tutor-timeline-txt">
              <div className="col timeline-txt-1">
                <span className="col timeline-txt-1-span timeline-txt-1-span-1">
                  Sign Up
                </span>
                <span className="col timeline-txt-1-span timeline-txt-1-span-2">
                  to create your tutor profile
                </span>
              </div>
              <div className="col timeline-txt-2">
                <span className="col timeline-txt-1-span timeline-txt-2-span-1">
                  Get Approved
                </span>
                <span className="col timeline-txt-1-span timeline-txt-2-span-2">
                  by our team
                </span>
              </div>
              <div className="col timeline-txt-3">
                <span className="col timeline-txt-1-span timeline-txt-3-span-1">
                  Start Learning
                </span>
                <span className="col timeline-txt-1-span timeline-txt-3-span-2">
                  by teaching students all over the country!
                </span>
              </div>
            </div>

            <button className="become-a-tutor-main-button">
              Create a Tutor Profile
            </button>
          </div>

          <div className="become-a-tutor-container1-right">
            <img src={becomATutorImg} alt="" />
          </div>
        </div>
      </div>

      <div className="become-a-tutor-second ">
        <p className="become-a-tutor-second-main-title max-width-container secondary-titles">
          Benefits of Becoming a Tutor with us
        </p>

        <div className="grid grid-3-cols max-width-container become-a-tutor-second-container">
          <div className="our-benfits">
            <img className="our-benfits-image" src={instantPayment} alt="" />
            <div className="our-benfits-content">
              <p className="our-benfits-title">Instant Payment</p>
              <p className="our-benfits-des">
                Effortless, real-time fee processing for quick and easy
                transactions.
              </p>
            </div>
          </div>

          <div className="our-benfits">
            <img className="our-benfits-image" src={enhancedSecurity} alt="" />
            <div className="our-benfits-content">
              <p className="our-benfits-title">Enhanced Security</p>
              <p className="our-benfits-des">
                Robust protections to safeguard data and ensure privacy.
              </p>
            </div>
          </div>

          <div className="our-benfits">
            <img className="our-benfits-image" src={studentMonitoring} alt="" />
            <div className="our-benfits-content">
              <p className="our-benfits-title">Student Monitoring</p>
              <p className="our-benfits-des">
                Comprehensive tools to track student progress, attendance, and
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="become-a-tutor-third">
        <p className="become-a-tutor-third-main-title max-width-container secondary-titles">
          Smart Tutor solutions in numbers
        </p>
        <div className="become-a-tutor-third-shadow max-width-container grid grid-4-cols">
          <div className="solutions-in-numbers">
            <p className="solutions-in-numbers-title">1000+</p>
            <p className="solutions-in-numbers-des">Registrations</p>
          </div>

          <div className="solutions-in-numbers">
            <p className="solutions-in-numbers-title">1000+</p>
            <p className="solutions-in-numbers-des">Successfull works</p>
          </div>

          <div className="solutions-in-numbers">
            <p className="solutions-in-numbers-title">50+</p>
            <p className="solutions-in-numbers-des">Centers</p>
          </div>

          <div className="solutions-in-numbers">
            <p className="solutions-in-numbers-title">100+</p>
            <p className="solutions-in-numbers-des">Centers</p>
          </div>
        </div>
      </div>

      <div className="become-a-tutor-fourth">
        <p className="become-a-tutor-fourth-main-title max-width-container secondary-titles">
          Our Tutors ‘ success stories
        </p>
        <div className="grid grid-2-cols max-width-container">
          <div className="success-stories-content">
            <p className="success-stories-title">
              “Revolutionized Our Training Process, Increased Course
              Completions, and Enhanced Learner Engagement Beyond Expectations”
            </p>
            <p className="success-stories-des">
              Smart Tutor has transformed our training process with its
              user-friendly interface and powerful features. Creating and
              managing courses is now effortless. Since adopting it, we’ve
              achieved a 40% increase in course completions and improved learner
              engagement. The advanced analytics and live session tools have
              been game-changers. We highly recommend Smart Tutor for any
              organization seeking an innovative LMS solution!
            </p>
            <img className="success-stories-img" src={avatar1} alt="" />
          </div>

          <div className="success-stories-content">
            <p className="success-stories-title">
              “Revolutionized Our Training Process, Increased Course
              Completions, and Enhanced Learner Engagement Beyond Expectations”
            </p>
            <p className="success-stories-des">
              Smart Tutor has transformed our training process with its
              user-friendly interface and powerful features. Creating and
              managing courses is now effortless. Since adopting it, we’ve
              achieved a 40% increase in course completions and improved learner
              engagement. The advanced analytics and live session tools have
              been game-changers. We highly recommend Smart Tutor for any
              organization seeking an innovative LMS solution!
            </p>
            <img className="success-stories-img" src={avatar2} alt="" />
          </div>
        </div>
      </div>

      <div className="become-a-tutor-fifth">
        <div className="become-a-tutor-fifth-container">
          <p className="connect-title">Let's Connect</p>
          <p className="connect-des">
            Feel free to reach out if you need high-volume licenses, academic
            and freelance discounts, or want a custom quote. We’ll get back to
            you shortly!
          </p>
          <a className="btn btn-connect" href="#">
            Contact us
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="max-width-container grid grid-footer">
          <div className="logo-col">
            <a className="footer-logo" href="#">
              Smart Tutor
            </a>
          </div>
          <nav class="nav-col">
            <p class="footer-heading">Company Information</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="">
                  Careers
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Tution Centers
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Become a Tutor
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  FAQs
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Site map
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Using the Online Space
                </a>
              </li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Popular Requests</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="">
                  Combined Mathematics Tutor
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Chemistry Tutor
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Physics Tutor
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Biology Tutor
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  English Tutor
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  A level Tutors
                </a>
              </li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="">
                  Contact us
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
                  Help center
                </a>
              </li>
              <li>
                <a class="footer-link" href="">
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
