import { useState } from 'react';
import CourseCard from '../StudentDashboard/CourseCard';
import styles from '../../.ExternalCss/StudentCourses.module.css';
// import Calendar from '../components/Calendar';


function Courses() {
    // Mock data for enrolled courses
    const enrolledCourses = [
      {
        id: 1,
        title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
        tag: 'UI / UX',
        progress: 50,
        image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=826&t=st=1701338459~exp=1701339059~hmac=5b9d5bd94c797f874a9d326d0a12dc27a7f9aa3a5b87703e74d0d7d3a299fb7c'
      },
      {
        id: 2,
        title: 'Designing Engaging Learning Experiences: Mastering UI/UX Best Practices',
        tag: 'UI / UX',
        progress: 75,
        image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065782.jpg?w=826&t=st=1701338486~exp=1701339086~hmac=d6e6d1c954f991b473a6da1c3a85418a4e653e6b1eb09e47c5a86a6587a54e6c'
      }
    ];

    const upcomingCourses = [
        {
          id: 1,
          title: 'Java Script Fundamentals',
          tag: 'Programming',
          description: 'An introduction to core JavaScript concepts, including variables, data types, operators, functions, control structures, and basic DOM manipulation.',
          duration: '3 months',
          lessons: 42,
          instructors: [
            'https://randomuser.me/api/portraits/men/32.jpg',
            'https://randomuser.me/api/portraits/women/44.jpg',
            'https://randomuser.me/api/portraits/men/46.jpg',
            'https://randomuser.me/api/portraits/women/65.jpg'
          ],
          image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1701338561~exp=1701339161~hmac=a5b7d1d51cae0b8a5a7cf1f0bcc4cf01f5b7e0a3e2c838c859b7b8d463e8c911'
        },
        {
          id: 2,
          title: 'Java Script Fundamentals',
          tag: 'Programming',
          description: 'An introduction to core JavaScript concepts, including variables, data types, operators, functions, control structures, and basic DOM manipulation.',
          duration: '3 months',
          lessons: 42,
          instructors: [
            'https://randomuser.me/api/portraits/men/32.jpg',
            'https://randomuser.me/api/portraits/women/44.jpg',
            'https://randomuser.me/api/portraits/men/46.jpg'
          ],
          image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1701338561~exp=1701339161~hmac=a5b7d1d51cae0b8a5a7cf1f0bcc4cf01f5b7e0a3e2c838c859b7b8d463e8c911'
        },
        {
          id: 3,
          title: 'Java Script Fundamentals',
          tag: 'Programming',
          description: 'An introduction to core JavaScript concepts, including variables, data types, operators, functions, control structures, and basic DOM manipulation.',
          duration: '3 months',
          lessons: 42,
          instructors: [
            'https://randomuser.me/api/portraits/men/32.jpg',
            'https://randomuser.me/api/portraits/women/44.jpg',
            'https://randomuser.me/api/portraits/men/46.jpg'
          ],
          image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1701338561~exp=1701339161~hmac=a5b7d1d51cae0b8a5a7cf1f0bcc4cf01f5b7e0a3e2c838c859b7b8d463e8c911'
        }
      ];

    return (
      <div className={`${styles["courses-page"]}`}>
      <div className={`${styles["welcome-banner"]}`}>
        <div className={`${styles["banner-content"]}`}>
          <div className={`${styles["banner-tag"]}`}>ONLINE COURSES</div>
          <h1 className={`${styles["banner-title"]}`}>Welcome Back! Thevinu</h1>
        </div>
        <div className={`${styles["banner-image"]}`}>
          <img 
            src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4735.jpg?w=740&t=st=1701338647~exp=1701339247~hmac=1a0c5fd3c8e1072a2d173fb8a4f0f122e2d1cd13b8f5b8c3fbf5c53d96b99468" 
            alt="Learning" 
          />
        </div>
      </div>
      
      <div className={`${styles["courses-container"]}`}>
        <div className={`${styles["main-section"]}`}>
          <div className={`${styles["enrolled-courses"]}`}>
            <div className={`${styles["section-header"]}`}>
              <h2 className={`${styles["section-title"]}`}>Your Courses</h2>
              <span className={`${styles["see-all"]}`}>See all</span>
            </div>
            
            <div className={`${styles["enrolled-courses-grid"]}`}>
              {enrolledCourses.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  type="enrolled" 
                />
              ))}
            </div>
          </div>
          
          <div className={`${styles["upcoming-courses"]}`}>
            <div className={`${styles["section-header"]}`}>
              <h2 className={`${styles["section-title"]}`}>Upcoming Courses</h2>
              <span className={`${styles["see-all"]}`}>See all</span>
            </div>
            
            <div className={`${styles["upcoming-courses-scroll"]}`}>
              {upcomingCourses.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  type="upcoming" 
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className={`${styles["side-section"]}`}>
    
              {/* <Calendar /> */}
            </div>
          </div>
        </div>
    );    


}

export default Courses;