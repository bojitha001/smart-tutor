import React from 'react';
import { Search, Bell } from 'lucide-react';
import { FaBell, FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import styles from "../../.ExternalCss/dashboardPayments.module.css";
import testImg from "../../assets/images/Avatar1.jpg"; 


function DashboardPayments() {

    const recentStudents = [
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
        { date: 'Today', name: 'Vihan Mendis', paymentMethod: 'Bank Transfer', paymentStatus: '2,500' },
      ];

    return(
    <div className={styles.dashboard}>
        <header>
          <div className={`${styles["search-bar"]}`}>
            <IoSearch />
            <input type="text" placeholder="Search here..." />
          </div>
          <div className={`${styles["profile-section"]}`}>
            <FaBell className={`${styles["notification-icon"]}`} />
            <div className={`${styles["profile-info"]}`}>
              <img src={testImg} alt="Profile" className={`${styles["profile-pic"]}`} />
              <div>
                <div className={`${styles["profile-name"]}`}>Sarah Perera</div>
                <div className={`${styles["profile-username"]}`}>@sarah123</div>
              </div>
            </div>
          </div>
        </header>



        <main>
            <div className={styles.content}>
                <div className={`${styles["wallet-section"]}`}>
                    <h2 className={`${styles["wallet-header"]}`}>Smart Tutor Wallet</h2>
                <div className={`${styles["total-cashflow"]}`}></div>
             
                
                </div>
            </div>


            <div className={`${styles["latest-transactions-section"]}`}></div>



        </main>



        <div className={styles.recentStudents}>
          <div className={styles.sectionHeader}>
            <h2>Students Joined Recently</h2>
            <button className={styles.viewAll}>View all</button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.studentsTable}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Payment Method</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.date}</td>
                    <td>{student.name}</td>
                    <td>{student.paymentMethod}</td>
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


    );

}


export default DashboardPayments;
