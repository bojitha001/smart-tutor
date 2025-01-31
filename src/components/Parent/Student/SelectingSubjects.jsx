import React, { useState } from "react";
import rocket from "../../../assets/images/Rocket.png";
import plant from "../../../assets/images/plant.png";
import maths from "../../../assets/images/maths.png";
import chem from "../../../assets/images/chemestry.png";
import "../../../.ExternalCss/SelectingSubject.css";

const subjects = [
  { subject: "physics", img: rocket },
  { subject: "Biology", img: plant },
  { subject: "Maths", img: maths },
  { subject: "Chemestry", img: chem },
];

const SelectingSubjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1); // Loop between 2 slides
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1); // Loop back
  };

  return (
    <div className="slider-container">
      {/* Buttons */}
      <button className="slider-btn prev-btn" onClick={prevSlide}>
        ❮
      </button>
      <button className="slider-btn next-btn" onClick={nextSlide}>
        ❯
      </button>

      {/* Slides */}
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="container selecting-subjects">
          <p className="main-title selecting-subjects-title">
            Let’s get started by selecting the subjects you like
          </p>
          <div className="selecting-subjects-container">
            {subjects.map((subject, index) => (
              <div key={index} className="selecting-subjects-subjects">
                <div className="subject-1">
                  <img className="subject-img" src={subject.img} alt="" />
                  <p>{subject.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container select-the-level">
          <p className="main-title select-the-level-title">
            <span className="select-the-level-title-main">Great Choice!</span>
            <span className="select-the-level-title-sub">
              Select the Level/ Grade of study
            </span>
          </p>

          <div className="select-the-level-categories">
            <div className="select-the-level-cate-1">
              <p className="select-the-level-cate-1-main-title">
                Primary Level
              </p>
              <p className="select-the-level-cate-1-sub-title">(Gr.1 - Gr.5)</p>
            </div>

            <div className="select-the-level-cate-1">
              <p className="select-the-level-cate-1-main-title">
                Primary Level
              </p>
              <p className="select-the-level-cate-1-sub-title">(Gr.1 - Gr.5)</p>
            </div>

            <div className="select-the-level-cate-1">
              <p className="select-the-level-cate-1-main-title">
                Primary Level
              </p>
              <p className="select-the-level-cate-1-sub-title">(Gr.1 - Gr.5)</p>
            </div>

            <div className="select-the-level-cate-1">
              <p className="select-the-level-cate-1-main-title">
                Primary Level
              </p>
              <p className="select-the-level-cate-1-sub-title">(Gr.1 - Gr.5)</p>
            </div>

            <div className="select-the-level-cate-1">
              <p className="select-the-level-cate-1-main-title">
                Primary Level
              </p>
              <p className="select-the-level-cate-1-sub-title">(Gr.1 - Gr.5)</p>
            </div>
          </div>

        </div>

        <div className="selecting-subjects">
          <p className="selecting-subjects-title">
            Let’s get started by selecting the subjects you like
          </p>
          <div className="selecting-subjects-container">
            {subjects.map((subject, index) => (
              <div key={index} className="selecting-subjects-subjects">
                <div className="subject-1">
                  <img className="subject-img" src={rocket} alt="" />
                  <p>{subject.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SelectingSubjects;
