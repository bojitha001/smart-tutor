import React, { useState } from "react";
import styles from "../../../.ExternalCss/form.module.css";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import contactForm from "../../../assets/images/tutorForm.jpg";

const addStudent = async (studentData) => {
  const res = await fetch("http://localhost:8080/student", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });
};

const InputForm = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const clerkId = user?.id;
  const userImageUrl = user?.imageUrl;
  console.log(clerkId);

    const [formData, setFormData] = useState({
        name:"",
        grade:"",
        subject:"",
        bio:"",
        contactNo:"",
        keyWords: []
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addStudent({
            clerkId,
            userImageUrl,
            name: formData.name,
            grade: formData.grade,
            subject: formData.subject,
            bio: formData.bio,
            contactNo: formData.contactNo,
            keyWords: formData.keyWords
        });
        navigate(`/`)
    }
    
  return (
    <div className={`${styles.container}`}>
      <div className={styles.formWrapper}>
        <img className={`${styles.formImage}`} src={contactForm}></img>
        <div class={`${styles.formContainer}`}>
          <h2 class={`${styles.formTitle}`}>Student Information</h2>
          <form onSubmit={handleSubmit}>
            <div class={`${styles.formGroup}`}>
              <label class={`${styles.label}" for="name`}>Name</label>
              <input
                class={`${styles.input}`}
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
            </div>

            <div class={`${styles.formGroup}`}>
              <label class={`${styles.label}`} for="grade">
                Grade
              </label>
              <input
                class={`${styles.input}`}
                type="text"
                name="grade"
                required
                placeholder="Enter your grade"
                onChange={(event) =>
                  setFormData({ ...formData, grade: event.target.value })
                }
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
            <label class={`${styles.label}`} for="contactNo">
              Contact No
            </label>
            <input
              class={`${styles.input}`}
              type="text"
             
              name="contactNo"
              required
              placeholder="Enter your contact No here"
              onChange={(event) => setFormData({...formData, contactNo:event.target.value})}
            />
          </div>

          <div class={`${styles.formGroup}`}>
            <label class={`${styles.label}`} for="keywords">
              KeyWords
            </label>
            <input
              class={`${styles.input}`}
              type="text"
             
              name="keywords"
              required
              placeholder="Maths, AdvancedLevel"
              onChange={(event) => setFormData({...formData, keyWords:event.target.value.split(',').map(keyword => keyword.trim()).filter(k => k)

              })
            }
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
                onChange={(event) =>
                  setFormData({ ...formData, bio: event.target.value })
                }
              ></textarea>
            </div>

            <button class={`${styles.button}`} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
