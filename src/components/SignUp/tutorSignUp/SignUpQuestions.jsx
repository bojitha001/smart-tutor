import { useState } from "react";
import '../../.ExternalCss/SignUpQuestions.css';
import smartTutorImage from "../../assets/images/smartTutor.svg"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import { SignUpOptions } from "./SignUpOptions";

export const SignUpQuestions = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [degree, setDegree] = useState("");
    // const [showSignUpOptions, setShowSignUpOptions] = useState(false); // Declare the state to control visibility

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

        navigate("/SignUpOptions"); // Navigate to SignUpOptions

        // setShowSignUpOptions(true);
    };

    return(
        <>
        {/* {!showSignUpOptions ? ( */}
        <div className="row g-3">
            <div className="col-md-12 signUp-form">
                <img className="smartTutor-Img" src={smartTutorImage} alt="" />
                <form className="row g-5 question-form">
                    <h1 className="text-center signUp-question-topic">Get to Know You Better !</h1>
                    <h3 className="text-center signUp-question-descrip">We just need a few details to set up your profile and stay connected. This will help us<br></br> provide a seamless experience as you start your journey as a tutor!</h3>
                    <div className="col-md-5">
                        <label className="form-label">First Name</label>
                        <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Last Name</label>
                        <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Date of Birth</label>
                        <input
                        className="form-control"
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Phone Number</label>
                        <input
                        className="form-control"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Gender</label>
                        <DropdownButton 
                            id="dropdown-gender" 
                            title={gender} 
                            onSelect={handleGenderSelect}
                        >
                            <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                            <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                            <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Degree</label>
                        <DropdownButton 
                            id="dropdown-degree" 
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
                            className="btn btn-lg continue-signup-button"
                            onClick={handleContinueToSignup}
                        >  
                            Continue to Sign-up &nbsp;&nbsp;&#129122;
                        </button>
                    </div>
                </form>
            </div>
        </div>
        {/* ):(
        <SignUpOptions firstName={firstName} lastName={lastName} dateOfBirth={dateOfBirth} phoneNumber={phoneNumber} gender={gender} degree={degree}/>
        )} */}
        </>
    );
}