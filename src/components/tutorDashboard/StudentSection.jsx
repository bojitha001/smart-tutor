import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import styles from "../../.ExternalCss/TutorStudentsSection.module.css";
import { useUser } from "@clerk/clerk-react";

const StudentView = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [recentStudents, setRecentStudents] = useState([]);

  const studentMarks = [
    { name: "Samadhi Sandunika", subject: "Mathematics", marks: 95 },
    { name: "Vihan Mendis", subject: "Physics", marks: 88 },
    { name: "Manilka Keshan", subject: "Chemistry", marks: 92 },
    { name: "Bojitha Nawarathna", subject: "Biology", marks: 85 },
    { name: "Kavindi Silva", subject: "Mathematics", marks: 90 },
    { name: "Samadhi Sandunika", subject: "Mathematics", marks: 95 },
    { name: "Vihan Mendis", subject: "Physics", marks: 88 },
    { name: "Manilka Keshan", subject: "Chemistry", marks: 92 },
    { name: "Bojitha Nawarathna", subject: "Biology", marks: 85 },
    { name: "Kavindi Silva", subject: "Mathematics", marks: 90 },
    { name: "Rashmi Perera", subject: "Physics", marks: 87 },
  ];

  const { user } = useUser();
  const userClerk = user?.id;

  const updatePaymentStatus = async (bookingId, newStatus) => {
   
    try {
      
      const response = await fetch(
        `http://localhost:8080/bookings/${user.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingId: bookingId,
            paymentStatus: newStatus,
          }),
        }
      );

      if (response.ok) {
        
        setRecentStudents((prev) =>
          prev.map((student) =>
            student._id === bookingId
              ? { ...student, paymentStatus: newStatus }
              : student
          )
        );
        console.log("Payment status updated successfully");

        
        fetchBookings();
      } else {
        console.error("Failed to update payment status");
        const errorData = await response.text();
        console.error("Error details:", errorData);
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
    } finally {
     
    }
  };

  const fetchBookings = async () => {
    if (userClerk) {
      try {
        const response = await fetch(
          `http://localhost:8080/bookings/${user.id}`
        );
        if (response.ok) {
          const data = await response.json();
          const formattedData = data.map((booking) => {
            const date = new Date(booking.createdAt);
            return {
              ...booking,
              dateJoined: date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }),
              paymentStatus: booking.paymentStatus || "Pending",
            };
          });
          setRecentStudents(formattedData);
        } else {
          console.log("Failed to fetch bookings");
        }
      } catch (error) {
        console.log("Error fetching bookings", error);
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [userClerk]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.studentView}>
        <div className={styles.header}>
          <div className={`${styles["search-bar"]}`}>
            <IoSearch />
            <input type="text" placeholder="Search here..." />
          </div>
          <div className={styles.profile}>
            <div className={styles.notifications}>
              <FaBell />
            </div>
            <div className={styles.userInfo}>
              <span>Sarah Perera</span>
              <span className={styles.username}>@sarah123</span>
            </div>
          </div>
        </div>

        {/* <div className={styles.statsContainer}>
          <div className={styles.statBox}>
            <h3>Students Joined this Month</h3>
            <span className={styles.statNumber}>133</span>
          </div>
          <div className={styles.statBox}>
            <h3>Students Joined this Year</h3>
            <span className={styles.statNumber}>3056</span>
          </div>
          <div className={styles.statBox}>
            <h3>Total Students joined with you</h3>
            <span className={styles.statNumber}>99056</span>
          </div>
        </div> */}

        <div className={styles.recentStudents}>
          <div className={styles.sectionHeader}>
            <h2>Students Joined Recently</h2>
            <button className={styles.viewAll}>View all</button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.studentsTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date Joined</th>
                  <th>Payments</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.studentName}</td>
                    <td>{student.studentEmail}</td>
                    <td>{student.dateJoined}</td>
                    <td
                      className={
                        (student.paymentStatus || "Pending") === "Done"
                          ? styles.statusDone
                          : styles.statusPending
                      }
                    >
                      <select
                        value={student.paymentStatus || "Pending"}
                        onChange={(e) =>
                          updatePaymentStatus(student._id, e.target.value)
                        }
                        className={styles.paymentSelect}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Done">Done</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        {/* <div className={styles.managementSection}>
          <h2>Manage Students</h2>
          <div className={styles.managementCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-user-plus"></i>
              <div>
                <h3>Student requests to join</h3>
                <span className={styles.requestCount}>43</span>
              </div>
            </div>
          </div>
          <div className={styles.managementCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-user-check"></i>
              <div>
                <h3>Student requests to join</h3>
                <span className={styles.requestCount}>43</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.marksSection}>
          <h2>Student Marks</h2>
          <div className={styles.marksTableContainer}>
            <table className={styles.marksTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {studentMarks.map((mark, index) => (
                  <tr key={index}>
                    <td>{mark.name}</td>
                    <td>{mark.subject}</td>
                    <td className={styles.marks}>{mark.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
