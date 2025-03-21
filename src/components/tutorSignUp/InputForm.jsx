import React, { useState } from "react";
import styles from "../../.ExternalCss/form.module.css"
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";


const addTeacher = async (tutorData) => {
    
    const res = await fetch("http://localhost:8080/teachers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tutorData),
    });
}

const InputForm = () => {
    const navigate = useNavigate();
    const {user} = useUser();
    const clerkId = user?.id;
    const userImageUrl = user?.imageUrl;
    console.log(clerkId)

    const [formData, setFormData] = useState({
        name:"",
        degree:"",
        subject:"",
        bio:"",
        contactNo:""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addTeacher({
            clerkId,
            userImageUrl,
            name: formData.name,
            degree: formData.degree,
            subject: formData.subject,
            bio: formData.bio,
            contactNo: formData.contactNo
        });
        navigate(`/`)
    }
    
  return (
    <div className={`${styles.container}`}>
      <div class={`${styles.formContainer}`}>
        <h2 class={`${styles.formTitle}`}>Tutor Information</h2>
        <form onSubmit={handleSubmit}>
          <div class={`${styles.formGroup}`}>
            <label class={`${styles.label}" for="name`}>
              Name
            </label>
            <input
              class={`${styles.input}`}
              type="text"
              
              name="name"
              required
              placeholder="Enter your full name"
              onChange={(event) => setFormData({...formData, name: event.target.value})}
            />
          </div>

          <div class={`${styles.formGroup}`}>
            <label class={`${styles.label}`} for="degree">
              Degree
            </label>
            <input
              class={`${styles.input}`}
              type="text"
              
              name="degree"
              required
              placeholder="Enter your degree"
              onChange={(event) => setFormData({...formData, degree:event.target.value})}
            />
          </div>

          <div class={`${styles.formGroup}`}>
            <label class={`${styles.label}`} for="subject">
              Subject
            </label>
            <input
              class={`${styles.input}`}
              type="text"
             
              name="subject"
              required
              placeholder="Enter your subject"
              onChange={(event) => setFormData({...formData, subject:event.target.value})}
            />
          </div>
          <div class={`${styles.formGroup}`}>
            <label class={`${styles.label}`} for="subject">
              Contact No
            </label>
            <input
              class={`${styles.input}`}
              type="text"
             
              name="subject"
              required
              placeholder="Enter your contactNo here"
              onChange={(event) => setFormData({...formData, contactNo:event.target.value})}
            />
          </div>

          <div class={`${styles.formGroup}`}>
            <label class="${styles.label}" for="bio">
              Bio
            </label>
            <textarea
              class={`${styles.textarea}`}
              
              name="bio"
              placeholder="Tell us about yourself"
              required
              onChange={(event) => setFormData({...formData, bio:event.target.value})}
            ></textarea>
          </div>

          <button class={`${styles.button}`} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
