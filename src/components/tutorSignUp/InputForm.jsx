import React, { useState } from "react";
import styles from "../../.ExternalCss/form.module.css";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import contactForm from "../../assets/images/tutorForm.jpg";

const addTeacher = async (tutorData) => {
  const res = await fetch("http://localhost:8080/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tutorData),
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
        degree:"",
        subject:"",
        bio:"",
        contactNo:"",
        keyWords: []
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
          <h2 class={`${styles.formTitle}`}>Tutor Information</h2>
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
              <label class={`${styles.label}`} for="degree">
                Degree
              </label>
              <input
                class={`${styles.input}`}
                type="text"
                name="degree"
                required
                placeholder="Enter your degree"
                onChange={(event) =>
                  setFormData({ ...formData, degree: event.target.value })
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
            <label class={`${styles.label}`} for="contact">
              Contact No
            </label>
            <input
              class={`${styles.input}`}
              type="text"
             
              name="contact"
              required
              placeholder="Enter your contact No here"
              onChange={(event) => setFormData({...formData, contactNo:event.target.value})}
            />
          </div>

          <div class={`${styles.formGroup}`}>
            <label class={`${styles.label}`} for="keyword">
              KeyWords
            </label>
            <input
              class={`${styles.input}`}
              type="text"
             
              name="keyword"
              required
              placeholder="Maths, AdvancedLevel"
              onChange={(event) => setFormData({...formData, keyWords:event.target.value.split(',').map(keyword => keyword.trim()).filter(k => k)

              })
            }
            />
          </div>
          <div class={`${styles.formGroup}`}>
            <label class={`${styles.label}`} for="experience">
              Experience
            </label>
            <input
              class={`${styles.input}`}
              type="text"
             
              name="experience"
              required
              placeholder="I have experience on ..."
              onChange={(event) => setFormData({...formData, experience:event.target.value.split(',').map(keyword => keyword.trim()).filter(k => k)

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
