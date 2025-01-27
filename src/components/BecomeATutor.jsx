import React from "react";

import "../.ExternalCss/BecomeATutor.css";
import becomATutorImg from "../assets/images/BecomeATutor.png";

const BecomeATutor = () => {
  return (
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
              <span className="col timeline-txt-1-span timeline-txt-1-span-1">Sign Up</span>
              <span className="col timeline-txt-1-span timeline-txt-1-span-2">to create your tutor profile</span>
            </div>
            <div className="col timeline-txt-2">
              <span className="col timeline-txt-1-span timeline-txt-2-span-1">Get Approved</span>
              <span className="col timeline-txt-1-span timeline-txt-2-span-2">by our team</span>
            </div>
            <div className="col timeline-txt-3">
              <span className="col timeline-txt-1-span timeline-txt-3-span-1">Start Learning</span> 
              <span className="col timeline-txt-1-span timeline-txt-3-span-2">by teaching students all over the
              country!
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
  );
};

export default BecomeATutor;
