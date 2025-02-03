import { useState } from 'react';
import { FaBell, FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import Calendar from 'react-calendar';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'react-calendar/dist/Calendar.css';
import styles from "../../.ExternalCss/TutorMainView.module.css";


function MainContent() {
    const [value, onChange] = useState(new Date());
  
    const enrollmentData = [
      { name: 'Jan', students: 30 },
      { name: 'Feb', students: 40 },
      { name: 'Mar', students: 35 },
      { name: 'Apr', students: 45 },
      { name: 'May', students: 40 },
      { name: 'Jun', students: 50 },
    ];
  
    const revenueData = [
      { name: 'Jan', revenue: 15000 },
      { name: 'Feb', revenue: 20000 },
      { name: 'Mar', revenue: 18000 },
      { name: 'Apr', revenue: 22000 },
      { name: 'May', revenue: 20000 },
      { name: 'Jun', revenue: 25000 },
    ];
  
    return (
      <div className={`${styles["main-content"]}`}>
        <header>
          <div className={`${styles["search-bar"]}`}>
            <IoSearch />
            <input type="text" placeholder="Search here..." />
          </div>
          <div className={`${styles["profile-section"]}`}>
            <FaBell className={`${styles["notification-icon"]}`} />
            <div className={`${styles["profile-info"]}`}>
              <img src="https://via.placeholder.com/40" alt="Profile" className={`${styles["profile-pic"]}`} />
              <div>
                <div className={`${styles["profile-name"]}`}>Sarah Perera</div>
                <div className={`${styles["profile-username"]}`}>@sarah123</div>
              </div>
            </div>
          </div>
        </header>
  
        <div className={`${styles["main-content-left"]}`}>
          <div className={`${styles["welcome-banner"]}`}>
            <div className={`${styles["welcome-text"]}`}>
              <h1>Welcome Back, Sarah!</h1>
              <p>Let's share your knowledge</p>
            </div>
            <img src="https://via.placeholder.com/200" alt="Welcome" />
          </div>
  
          <div className={styles.statistics}>
            <div className={`${styles["stat-card"]}`}>
              <div className={`${styles["stat-icon"]}`}>
                <FaUserGraduate />
              </div>
              <div className={`${styles["stat-info"]}`}>
                <h3>Active Students</h3>
                <p>40</p>
              </div>
            </div>
            <div className={`${styles["stat-card"]}`}>
              <div className={`${styles["stat-icon"]}`}>
                <FaChalkboardTeacher />
              </div>
              <div className={`${styles["stat-info"]}`}>
                <h3>Total Classes</h3>
                <p>10</p>
              </div>
            </div>
            <div className={`${styles["stat-card"]}`}>
              <div className={`${styles["stat-icon"]}`}>
                <FaMoneyBillWave />
              </div>
              <div className={`${styles["stat-info"]}`}>
                <h3>Monthly Revenue</h3>
                <p>Rs. 25,000</p>
              </div>
            </div>
            <div className={`${styles["stat-card"]}`}>
              <div className={`${styles["stat-icon"]}`}>
                <FaChartLine />
              </div>
              <div className={`${styles["stat-info"]}`}>
                <h3>Total Revenue</h3>
                <p>Rs. 200,000</p>
              </div>
            </div>
          </div>
  
          <div className={`${styles["progress-section"]}`}>
            <div className={`${styles["chart-card"]}`}>
              <div className={`${styles["chart-header"]}`}>
                <div>
                  <div className={`${styles["chart-title"]}`}>Student Enrollment</div>
                  <div className={`${styles["chart-value"]}`}>+20</div>
                  <div className={`${styles["chart-subtitle"]}`}>+10 from last month</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="students" fill="#fdb813" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className={`${styles["chart-card"]}`}>
              <div className={`${styles["chart-header"]}`}>
                <div>
                  <div className={`${styles["chart-title"]}`}>Total Revenue</div>
                  <div className={`${styles["chart-value"]}`}>$1000</div>
                  <div className={`${styles["chart-subtitle"]}`}>+20.1% from last month</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#fdb813" 
                    strokeWidth={2}
                    dot={{ fill: '#fdb813', strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
  
          <div className={styles.advertisements}>
            <div className={`${styles["section-header"]}`}>
              <h3 className={`${styles["section-title"]}`}>Advertisements</h3>
            </div>
            <div className={`${styles["ad-cards"]}`}>
              <div className={`${styles["ad-card"]}`}>
                <img src="https://via.placeholder.com/300x200" alt="Mathematics Class" />
                <div className={`${styles["ad-content"]}`}>
                  <h4>Mathematics Class</h4>
                  <p>Advanced calculus for Grade 12 students</p>
                </div>
              </div>
              <div className={`${styles["ad-card"]}`}>
                <img src="https://via.placeholder.com/300x200" alt="Physics Class" />
                <div className={`${styles["ad-content"]}`}>
                  <h4>Physics Class</h4>
                  <p>Mechanics and dynamics for Grade 11 students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className={`${styles["right-sidebar"]}`}>
          <div className={`${styles["calendar-section"]}`}>
            <div className={`${styles["section-header"]}`}>
              <h3 className={`${styles["section-title"]}`}>Schedule</h3>
            </div>
            <Calendar 
              onChange={onChange} 
              value={value}
              calendarType="gregory"
              formatShortWeekday={(locale, date) => 
                date.toLocaleDateString('en', { weekday: 'short' }).slice(0, 2)
              }
            />
          </div>
          <div className={styles.announcements}>
            <div className={`${styles["section-header"]}`}>
              <h3 className={`${styles["section-title"]}`}>Announcements</h3>
            </div>
            <div className={`${styles["announcement-list"]}`}>
              <div className={styles.announcement}>
                <h4>New Class Schedule</h4>
                <p>Physics class rescheduled to Friday 4 PM</p>
              </div>
              <div className={styles.announcement}>
                <h4>Exam Preparation</h4>
                <p>Special session for A/L students next week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainContent;