import React, { useEffect, useState } from 'react'
import { Star, Mail, Phone, GraduationCap, Clock } from 'lucide-react';
import styles from '../.ExternalCss/tutorProfile.module.css'
import { useParams } from 'react-router';



const getATeacherById = async (id) => {

    const res = await fetch(`http://localhost:8080/teachers/${id}`, {
        method: "GET",
    });
    const tutor = await res.json();
    return tutor;
}


const TutorProfile = () => {

    const params = useParams();
    const[tutor, setTutor] = useState(null);

    useEffect(()=> {
        getATeacherById(params.id)
        // console.log(params.id)
        .then((data) => {
            setTutor(data)
        })
        .catch((err) => {})
        .finally(() => {})
    }, [params])
    


    return (

        
        <div className={styles.container}>
          <div className={styles.profileSection}>
            <div className={styles.imageWrapper}>
              <img
                src={tutor?.userImageUrl}
                className={styles.profileImage}
              />
            </div>
            <h1 className={styles.name}>{tutor?.name}</h1>
            <div className={styles.rating}>
              <Star className={styles.starIcon} size={20} />
              <span>4.9/5</span>
            </div>
          </div>
    
          <div className={styles.infoSection}>
          <div className={styles.bioSection}>
              <h2>About Me</h2>
              <p>
                {tutor?.bio}
              </p>
            </div>
    
            <div className={styles.educationSection}>
              <h2>
                <GraduationCap className={styles.sectionIcon} />
                Education
              </h2>
              <ul>
                <li>{tutor?.degree}</li>
                
              </ul>
            </div>
    
    
            <div className={styles.experienceSection}>
              <h2>
                <Clock className={styles.sectionIcon} />
                Experience
              </h2>
              <p>12 years of teaching experience in advanced mathematics</p>
            </div>
    
    
            <div className={styles.contactSection}>
              <h2>Contact Information</h2>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>sarah.anderson@smarttutor.lk</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>{tutor?.contactNo}</span>
              </div>
            </div>
          </div>
        </div>
      );
    
    };

export default TutorProfile