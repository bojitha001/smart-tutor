import React, { useEffect, useState } from "react";
import { Star, Mail, Phone, GraduationCap, Clock } from "lucide-react";
import styles from "../.ExternalCss/tutorProfile.module.css";
import { Navigate, useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import { useUser } from "@clerk/clerk-react";

const getATeacherById = async (id) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(`http://localhost:8080/teachers/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", 
      Authorization: `Bearer ${token}`,
    },
  });
  const tutor = await res.json();
  return tutor;
};

const TutorProfile = () => {
  const params = useParams();
  console.log(params.id);
  const navigate = useNavigate();
  const [tutor, setTutor] = useState(null);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    getATeacherById(params.id)
      // console.log(params.id)
      .then((data) => {
        setTutor(data);
      })
      .catch((err) => {})
      .finally(() => {});
  }, [params]);

  const handleSubmit = (event) => {
    console.log("hi");
  };

  const createBooking = async () => {
    try {
      const bookingData = {
        tutorID: params.id,
        studentId: user.id,
        studentImageUrl: user?.imageUrl,
        studentName: user
          ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
          : "Anonymous",
        studentEmail: user.emailAddresses[0]?.emailAddress || "",
      };
      console.log(bookingData);

      const res = await fetch("http://localhost:8080/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Booking successful:", data);
    } catch (error) {
      console.error("Error creating booking:", error);
      // You might want to show an error message to the user here
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <Navigate to="/login" replace/>;
  }

  return (
    <div class={`${styles.container}`}>
      <div class={`${styles.coverImage}`}></div>

      <div class={`${styles.profileSection}`}>
        <div class="relative">
          <div class={`${styles.profileImageContainer}`}>
            <img
              src={tutor?.userImageUrl}
              alt="Profile"
              class={`${styles.profileImage}`}
            />
            <div class={`${styles.profileInfo}`}>
              <h1 class={`${styles.name}`}>{tutor?.name}</h1>
              <p class={`${styles.title}`}>
              {tutor?.degree}
              </p>
              <div className={styles.contactItemContainer}>
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
        </div>

        <div class={`${styles.experienceSection}`}>
          <h2 class={`${styles.sectionTitle}`}>Experience</h2>
          <p class={`${styles.experienceText}`}>
            {tutor?.experience}
            {/* Specialist in UX/UI design, brand strategy, and product development. */}
          </p>

          <div class={`${styles.grid}`}>
            <div>
              <h3 class={`${styles.aboutTitle}`}>About me</h3>
              <p class={`${styles.aboutText}`}>
                {tutor?.bio}
              </p>
              
            </div>
          </div>

          <div class={`${styles.workHistory}`}>
            <div class={`${styles.workItem}`}>
              <div className={`${styles.workItemContainer}`}>
                <div class={`${styles.workIcon}`}>
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class={`${styles.workTitle}`}>Lead Product Designer</h3>
                  <p class={`${styles.workDate}`}>Jan 2022 - Present</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>

          <Link to="/find-tutor">
            <button onClick={createBooking} className={`${styles.bookButton}`}>
              Book
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
