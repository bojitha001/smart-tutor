import React, { useState } from "react";
import rocket from "../../../assets/images/Rocket.png";
import plant from "../../../assets/images/plant.png";
import maths from "../../../assets/images/maths.png";
import chem from "../../../assets/images/chemestry.png";
import congrats from "../../../assets/images/congrats.png"
import "../../../.ExternalCss/SelectingSubject.css";

const subjects = [
  { subject: "physics", img: rocket },
  { subject: "Biology", img: plant },
  { subject: "Maths", img: maths },
  { subject: "Chemistry", img: chem },
];

const SelectingSubjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [name, setName] = useState("");

  //   const loginDetails = [
  //     {
  //       name: "What’s you full name?",
  //       placeHolder: "Type your first and last name",
  //       button: "Next",
  //     },
  //     {
  //       name: "What’s your date of birth?",
  //       placeHolder: "DD/MM/YYYY",
  //       button: "Next",
  //     },
  //     {
  //       name: `Nice to meet you, ${name} . What’s your email?`,
  //       placeHolder: "Enter your email address",
  //       button: "Next",
  //     },
  //     {
  //       name: "Lastly, create your password!",
  //       placeHolder: "Create a password",
  //       button: "Finsih",
  //     },
  //   ];

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const loginDetails = [
    {
      key: "name",
      name: "What’s your full name?",
      placeHolder: "Type your first and last name",
      button: "Next",
    },
    {
      key: "dob",
      name: "What’s your date of birth?",
      placeHolder: "DD/MM/YYYY",
      button: "Next",
    },
    {
      key: "email",
      name: `Nice to meet you, ${formData.name} . What’s your email?`,
      placeHolder: "Enter your email address",
      button: "Next",
    },
    {
      key: "password",
      name: "Lastly, create your password!",
      placeHolder: "Create a password",
      button: "Finish",
    },
  ];

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value, // Dynamically update the correct field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  //   function handleSubmitName(e) {
  //     e.preventDefault();
  //     setName("");
  //   }

  const nextSlide = () => {
    if (currentIndex >= 6) return;
    setCurrentIndex((prevIndex) => prevIndex + 1); // Loop between 2 slides
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1); // Loop back
  };

  return (
    <div className="selecting-subjects">
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
                <p className="select-the-level-cate-1-sub-title">
                  (Gr.1 - Gr.5)
                </p>
              </div>

              <div className="select-the-level-cate-1">
                <p className="select-the-level-cate-1-main-title">
                  Primary Level
                </p>
                <p className="select-the-level-cate-1-sub-title">
                  (Gr.1 - Gr.5)
                </p>
              </div>

              <div className="select-the-level-cate-1">
                <p className="select-the-level-cate-1-main-title">
                  Primary Level
                </p>
                <p className="select-the-level-cate-1-sub-title">
                  (Gr.1 - Gr.5)
                </p>
              </div>

              <div className="select-the-level-cate-1">
                <p className="select-the-level-cate-1-main-title">
                  Primary Level
                </p>
                <p className="select-the-level-cate-1-sub-title">
                  (Gr.1 - Gr.5)
                </p>
              </div>

              <div className="select-the-level-cate-1">
                <p className="select-the-level-cate-1-main-title">
                  Primary Level
                </p>
                <p className="select-the-level-cate-1-sub-title">
                  (Gr.1 - Gr.5)
                </p>
              </div>
            </div>
          </div>

          {/* {loginDetails.map((details, index) => (
          <div key={index} className="container name">
            <p className="main-title name-title">{details.name}</p>
            <form
              className="form-container"
              action=""
              onSubmit={handleSubmitName}
            >
              <div className="name-container">
                <input
                  className="input-box"
                  placeholder={details.placeHolder}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button className="button-name">{details.button}</button>
            </form>
          </div>
        ))} */}
          {loginDetails.map((details, index) => (
            <div key={index} className="container">
              <p className="main-title">{details.name}</p>
              <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    className="input-box"
                    placeholder={details.placeHolder}
                    type={details.key === "password" ? "password" : "text"}
                    value={formData[details.key]}
                    onChange={(e) =>
                      handleInputChange(details.key, e.target.value)
                    }
                  />
                </div>
                <button onClick={nextSlide} className="button-name">
                  {details.button}
                </button>
              </form>
            </div>
          ))}

          <div className="container">
            <img className="congrats-img" src={congrats} alt="" />
            <p className="congrats-txt">Congratulations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectingSubjects;
