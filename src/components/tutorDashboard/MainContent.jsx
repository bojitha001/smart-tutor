import { useEffect, useState } from "react";
import {
  FaBell,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Calendar from "react-calendar";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "react-calendar/dist/Calendar.css";
import styles from "../../.ExternalCss/TutorMainView.module.css";
import testImg from "../../assets/images/Avatar1.jpg";
import { useUser, UserButton } from "@clerk/clerk-react";
import { CiSquarePlus } from "react-icons/ci";
import { data, Link } from "react-router";


const addAnnouncement = async (announcement) => {
  const res = await fetch("https://smart-tutor-backend-production.up.railway.app/announcements", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //saying we are passing a json
    },
    body: JSON.stringify(announcement)
  })
}

const getAllAnnouncements = async () => {
  const res = await fetch('https://smart-tutor-backend-production.up.railway.app/announcements', {
    method: "GET",
  });
  const announcement = await res.json();
  return announcement;
}

const getAnnouncementById = async (id) => {
  const res = await fetch(`https://smart-tutor-backend-production.up.railway.app/announcements/${id}`, {
    method: "GET",
  });
  console.log(id)
  const announcement = await res.json();
  return announcement;
  
  
}

function MainContent() {
  const [value, onChange] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoaded } = useUser();
  const tutorID = user?.id;

  const [announcement, setAnnouncement] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState([]);

  const handleForm = () => {
    setAnnouncement(!announcement)
  }

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    addAnnouncement({
      tutorID,
      title: formData.title,
      description: formData.description
    })
    console.log(announcement)
    setAnnouncement(false);
    setFormData({ title: "", description: "" });
    
    // Refresh announcements
    const updatedAnnouncements = await getAnnouncementById(tutorID);
    setNewAnnouncement(updatedAnnouncements);
  }

  const enrollmentData = [
    { name: "Jan", students: 10 },
    { name: "Feb", students: 40 },
    { name: "Mar", students: 35 },
    { name: "Apr", students: 45 },
    { name: "May", students: 40 },
    { name: "Jun", students: 50 },
  ];

  const revenueData = [
    { name: "Jan", revenue: 15000 },
    { name: "Feb", revenue: 20000 },
    { name: "Mar", revenue: 18000 },
    { name: "Apr", revenue: 22000 },
    { name: "May", revenue: 20000 },
    { name: "Jun", revenue: 25000 },
  ];

  // Get user's first name or full name
  const userName =
    isLoaded && user ? user.fullName || user.firstName || "User" : "User";
  // Get email if available
  // Get primary email address if available
  const userEmail =
    isLoaded && user && user.emailAddresses && user.emailAddresses.length > 0
      ? user.emailAddresses[0].emailAddress
      : "";

      useEffect(() => {
        if (isLoaded && tutorID) {
          console.log("Fetching announcements for tutorID:", tutorID);
          getAnnouncementById(tutorID)
            .then((data) => {
              console.log("Announcement data received:", data);
              setNewAnnouncement(data);
            })
            .catch((err) => {
              console.error("Error fetching announcements:", err);
            });
        }
      }, [isLoaded, tutorID]);

  return (
    <div className={`${styles["main-content"]}`}>
      <header className={styles.header}>
        <div className={`${styles["search-bar"]}`}>
          <IoSearch />
          <input type="text" placeholder="Search here..." />
        </div>
        <div className={`${styles["profile-section"]}`}>
          <FaBell className={`${styles["notification-icon"]}`} />
          <div className={`${styles["profile-info"]}`}>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "40px",
                    height: "40px",
                  },
                  userButtonTrigger: {
                    padding: "0",
                    margin: "0",
                  },
                },
              }}
            />
            <div className={styles["profile-details"]}>
              <div className={`${styles["profile-name"]}`}>{userName}</div>
              <div className={`${styles["profile-email"]}`}>{userEmail}</div>
            </div>
          </div>
        </div>
      </header>

      <div className={`${styles["content-wrapper"]}`}>
        <div className={`${styles["main-content-left"]}`}>
          <div className={`${styles["welcome-banner"]}`}>
            <div className={`${styles["welcome-text"]}`}>
              <h1>Welcome Back, {user?.firstName}!</h1>
              <p>Let's share your knowledge</p>
            </div>
            <img src={user?.imageUrl} alt="Welcome" />
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
                  <div className={`${styles["chart-title"]}`}>
                    Student Enrollment
                  </div>
                  <div className={`${styles["chart-value"]}`}>+20</div>
                  <div className={`${styles["chart-subtitle"]}`}>
                    +10 from last month
                  </div>
                </div>
              </div>
              <div className={styles["chart-container"]}>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar
                      dataKey="students"
                      fill="#fdb813"
                      radius={[5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={`${styles["chart-card"]}`}>
              <div className={`${styles["chart-header"]}`}>
                <div>
                  <div className={`${styles["chart-title"]}`}>
                    Total Revenue
                  </div>
                  <div className={`${styles["chart-value"]}`}>$1000</div>
                  <div className={`${styles["chart-subtitle"]}`}>
                    +20.1% from last month
                  </div>
                </div>
              </div>
              <div className={styles["chart-container"]}>
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
                      dot={{ fill: "#fdb813", strokeWidth: 2 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className={styles.advertisements}>
            <div className={`${styles["section-header"]}`}>
              <h3 className={`${styles["section-title"]}`}>Advertisements</h3>
            </div>
            <div className={`${styles["ad-cards"]}`}>
              <div className={`${styles["ad-card"]}`}>
                <img src={testImg} alt="Mathematics Class" />
                <div className={`${styles["ad-content"]}`}>
                  <h4>Mathematics Class</h4>
                  <p>Advanced calculus for Grade 12 students</p>
                </div>
              </div>
              <div className={`${styles["ad-card"]}`}>
                <img src={testImg} alt="Physics Class" />
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
                date.toLocaleDateString("en", { weekday: "short" }).slice(0, 2)
              }
              className={styles.customCalendar}
            />
          </div>
          
          <div className={styles.announcements}>
            <div className={`${styles["section-header"]}`}>
              <h3 className={`${styles["section-title"]}`}>Announcements</h3>
              <CiSquarePlus className={`${styles["section-icon"]}`} onClick={handleForm}/>
              {announcement &&
              <div className={styles.popupOverlay}>
                <div className={styles.popupContent}>
                  <h4>Add New Announcement</h4>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title:e.target.value})}
                      placeholder="Enter announcement"
                    />
                    <textarea name="" id="" value={formData.description} onChange={(e) => setFormData({...formData, description:e.target.value})}></textarea>
                    <div className={styles.popupButtons}>
                      <button type="button" onClick={() => {setAnnouncement(false); setFormData({title: "", description: ""})} }>
                        Cancel
                      </button>
                      
                      <button type="submit">Add</button>
                      
                    </div>
                  </form>
                </div>
              </div>
              }
            </div>
            <div className={`${styles["announcement-list"]}`}>
              <div className={styles.announcement}>
                {newAnnouncement.map((announcement) => (

                  <>
                  <h5>{announcement.title}</h5>
                  <p>{announcement.description}</p>
                  </>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
