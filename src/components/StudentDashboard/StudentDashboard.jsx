import { Link } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '../../.ExternalCss/StudentDashboard.module.css'
import { format } from 'date-fns';

const Dashboard = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'UI/UX Principle', content: 'Preview of the note here, is simply dummy text of the printing and typesetting industry.' },
    { id: 2, title: 'Chemistry - Organic', content: 'Preview of the note here, is simply dummy text of the printing and typesetting industry.' },
    { id: 3, title: 'Physics - Newton\'s law', content: 'Preview of the note here, is simply dummy text of the printing and typesetting industry.' },
    { id: 4, title: 'ICT - Database Management System', content: 'Preview of the note here, is simply dummy text of the printing and typesetting industry.' }
  ]);

  const [newNote, setNewNote] = useState('');
  const [date, setDate] = useState(new Date());

  const ongoingCourses = [
    { id: 1, subject: 'Physics', lecture: 'Lecture 05' },
    { id: 2, subject: 'Chemistry', lecture: 'Lecture 05' },
    { id: 3, subject: 'Biology', lecture: 'Lecture 05' },
    { id: 4, subject: 'ICT', lecture: 'Lecture 05' },
    { id: 5, subject: 'UI/UX', lecture: 'Lecture 05' }
  ];

  const upcomingTests = [
    { id: 1, subject: 'Physics', date: '2024-12-02' },
    { id: 2, subject: 'Maths', date: '2024-12-03' },
    { id: 3, subject: 'English', date: '2024-12-04' },
    { id: 4, subject: 'Physics', date: '2024-12-05' }
  ];

  const addNote = () => {
    if (newNote.trim()) {
      const newNoteObj = {
        id: notes.length + 1,
        title: `Note ${notes.length + 1}`,
        content: newNote
      };
      setNotes([newNoteObj, ...notes]);
      setNewNote('');
    }
  };

  return (
    <div className={styles.dashboard}>
     {/* Welcome Banner */}
     <div className={styles.welcomeBanner}>
        <div>
          <h1>Welcome back, Sarah!</h1>
          <p>Have a good day!</p>
        </div>
        <img src="/student-illustration.png" alt="Student" />
      </div>

      {/* Ongoing Courses */}
      <section className={styles.section}>
        <h2>This is where you left off!</h2>
        <div className={styles.courseGrid}>
          {ongoingCourses.map(course => (
            <div key={course.id} className={styles.courseCard}>
              <h3>{course.subject}</h3>
              <p>{course.lecture}</p>
              <button className={styles.continueBtn}>Continue</button>
            </div>
          ))}
        </div>
      </section>

      

      
    

    
    
    
    </div>
  );
};

export default Dashboard;