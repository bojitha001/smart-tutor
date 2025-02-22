import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import styles from "../../.ExternalCss/TutorStudentsSection.module.css";

const StudentView = () => {
  const recentStudents = [
    { name: 'Samadhi Sandunika', dateJoined: '26/12/2024', classesEnrolled: 2, paymentStatus: 'Done' },
    { name: 'Vihan Mendis', dateJoined: '26/12/2024', classesEnrolled: 1, paymentStatus: 'Done' },
    { name: 'Manilka Keshan', dateJoined: '25/12/2024', classesEnrolled: 2, paymentStatus: 'Done' },
    { name: 'Bojitha Nawarathna', dateJoined: '25/12/2024', classesEnrolled: 1, paymentStatus: 'Done' },
    { name: 'Samadhi Sandunika', dateJoined: '24/12/2024', classesEnrolled: 1, paymentStatus: 'Pending' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 3, paymentStatus: 'Done' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 2, paymentStatus: 'Pending' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 1, paymentStatus: 'Pending' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 1, paymentStatus: 'Pending' },
    { name: 'Vihan Mendis', dateJoined: '26/12/2024', classesEnrolled: 1, paymentStatus: 'Done' },
    { name: 'Manilka Keshan', dateJoined: '25/12/2024', classesEnrolled: 2, paymentStatus: 'Done' },
    { name: 'Bojitha Nawarathna', dateJoined: '25/12/2024', classesEnrolled: 1, paymentStatus: 'Done' },
    { name: 'Samadhi Sandunika', dateJoined: '24/12/2024', classesEnrolled: 1, paymentStatus: 'Pending' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 3, paymentStatus: 'Done' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 2, paymentStatus: 'Pending' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 1, paymentStatus: 'Pending' },
    { name: 'Samadhi Sandunika', dateJoined: '22/12/2024', classesEnrolled: 1, paymentStatus: 'Pending' }
  ];

  const studentMarks = [
    { name: 'Samadhi Sandunika', subject: 'Mathematics', marks: 95 },
    { name: 'Vihan Mendis', subject: 'Physics', marks: 88 },
    { name: 'Manilka Keshan', subject: 'Chemistry', marks: 92 },
    { name: 'Bojitha Nawarathna', subject: 'Biology', marks: 85 },
    { name: 'Kavindi Silva', subject: 'Mathematics', marks: 90 },
    { name: 'Rashmi Perera', subject: 'Physics', marks: 87 },
    { name: 'Dineth Fernando', subject: 'Chemistry', marks: 94 },
    { name: 'Malsha Dissanayake', subject: 'Biology', marks: 89 },
    { name: 'Vihan Mendis', subject: 'Physics', marks: 88 },
    { name: 'Manilka Keshan', subject: 'Chemistry', marks: 92 },
    { name: 'Bojitha Nawarathna', subject: 'Biology', marks: 85 },
    { name: 'Kavindi Silva', subject: 'Mathematics', marks: 90 },
    { name: 'Rashmi Perera', subject: 'Physics', marks: 87 },
    { name: 'Dineth Fernando', subject: 'Chemistry', marks: 94 },
    { name: 'Malsha Dissanayake', subject: 'Biology', marks: 89 }
  ];

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
              <FaBell/>
            </div>
            <div className={styles.userInfo}>
              <span>Sarah Perera</span>
              <span className={styles.username}>@sarah123</span>
            </div>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statBox}>
            <h3>Students Joined on this Month</h3>
            <span className={styles.statNumber}>133</span>
          </div>
          <div className={styles.statBox}>
            <h3>Students Joined on this Year</h3>
            <span className={styles.statNumber}>3056</span>
          </div>
          <div className={styles.statBox}>
            <h3>Total Students joined with you</h3>
            <span className={styles.statNumber}>99056</span>
          </div>
        </div>

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
                  <th>Date Joined</th>
                  <th>Classes Enrolled</th>
                  <th>Payments</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.dateJoined}</td>
                    <td>{student.classesEnrolled}</td>
                    <td className={student.paymentStatus === 'Done' ? styles.done : styles.pending}>
                      {student.paymentStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.managementSection}>
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
        </div>

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