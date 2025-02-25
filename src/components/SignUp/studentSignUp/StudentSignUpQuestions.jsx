import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../../.ExternalCss/TutorSignUpQuestions.module.css';
import smartTutorImage from "../../../assets/images/smartTutor.svg"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const StudentSignUpQuestions = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [degree, setDegree] = useState("");
    
    // Load saved data when component mounts
    useEffect(() => {
        const savedData = sessionStorage.getItem("signUpData");
        if (savedData) {
            const { firstName, lastName, dateOfBirth, phoneNumber, gender, degree } = JSON.parse(savedData);
            setFirstName(firstName || "");
            setLastName(lastName || "");
            setDateOfBirth(dateOfBirth || "");
            setPhoneNumber(phoneNumber || "");
            setGender(gender || "");
            setDegree(degree || "");
        }
    }, []);

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
    };

    const handleDegreeSelect = (selectedDegree) => {
        setDegree(selectedDegree);
    };

    const handleContinueToSignup = () => {
        if (!firstName || !lastName || !dateOfBirth || !phoneNumber || !gender || !degree) {
            alert("Please fill in all the details before continuing.");
            return;
        }

        // Store data in session storage
        const formData = { firstName, lastName, dateOfBirth, phoneNumber, gender, degree };
        sessionStorage.setItem("signUpData", JSON.stringify(formData));

         // Navigate to SignUpOptions
        navigate("/StudentSignUpOptions");
    };

    return(
        <>
            <div className="row g-3">
                <div className={`col-md-12 ${styles.signUpForm}`}>
                    <img className={`${styles.smartTutorImg}`} src={smartTutorImage} alt="" />
                    <form className={`row g-5 ${styles.questionForm}`}>
                        <h1 className={`text-center ${styles.signUpQuestionTopic}`}>Get to Know You Better !</h1>
                        <h3 className={`text-center ${styles.signUpQuestionDescrip}`}>We just need a few details to set up your profile and stay connected. This will help us<br></br> provide a seamless experience as you start your journey as a tutor!</h3>
                        <div className="col-md-5">
                            <label className={`form-label ${styles.formLabel}`}>First Name</label>
                            <input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            />
                        </div>
                        <div className="col-md-5">
                            <label className={`form-label ${styles.formLabel}`}>Last Name</label>
                            <input
                            type="text"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            />
                        </div>
                        <div className="col-md-5">
                            <label className={`form-label ${styles.formLabel}`}>Date of Birth</label>
                            <input
                            className="form-control"
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                            />
                        </div>
                        <div className="col-md-5">
                            <label className={`form-label ${styles.formLabel}`}>Phone Number</label>
                            <input
                            className="form-control"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            />
                        </div>
                        <div className="col-md-5">
                            <label className={`form-label ${styles.formLabel}`}>Gender</label>
                            <DropdownButton 
                                className={`${styles.dropdownGender}`} 
                                title={gender} 
                                onSelect={handleGenderSelect}
                            >
                                <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                                <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                            </DropdownButton>

                        </div>
                        <div className="col-md-5">
                            <label className={`form-label ${styles.formLabel}`}>Degree</label>
                            <DropdownButton 
                                className={`${styles.dropdownDegree}`}
                                title={degree} 
                                onSelect={handleDegreeSelect}
                            >
                                <Dropdown.Item eventKey="Bachelor's">Bachelor's</Dropdown.Item>
                                <Dropdown.Item eventKey="Master's">Master's</Dropdown.Item>
                                <Dropdown.Item eventKey="PhD">PhD</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="col-12 text-center">
                            <button
                                type="button"
                                className={`btn btn-lg ${styles.continueSignupButton}`}
                                onClick={handleContinueToSignup}
                            >  
                                Continue to Sign-up &nbsp;&nbsp;&#129122;
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}