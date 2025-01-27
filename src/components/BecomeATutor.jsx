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
          <p className="heading-secondary">Teaching on Smart Tutor: Simplify, Engage, Inspire...</p>
          <div className="become-a-tutor-timeline">
            <div className="become-a-tutor-timeline-box box-1">1</div>
            <div className="become-a-tutor-timeline-box box-2">2</div>
            <div className="become-a-tutor-timeline-box box-3">3</div>
          </div>
          <div className="become-a-tutor-timeline-txt">
            <p className="txt-box-1">Sign Up to create your tutor profile</p>
            <p className="txt-box-1">Get Approved by our team</p>
            <p className="txt-box-1">Start Learning by teaching students all over 
            the country!</p>
          </div>
          <button className="become-a-tutor-main-button">Create a Tutor Profile</button>
        </div>
        
        <div className="become-a-tutor-container1-right">
          <img src={becomATutorImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BecomeATutor;
