import { Link } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '../../.ExternalCss/StudentDashboard.module.css'
import { format } from 'date-fns';
import { useUser, UserButton } from '@clerk/clerk-react';

const Dashboard = () => {
  const { user, isLoaded } = useUser();

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
          <h1>Welcome back, {user?.firstName}!</h1>
          <p>Have a good day!</p>
        </div>
        {/* <img src="/student-illustration.png" alt="Student" /> */}
        <img src={user?.imageUrl} alt="Welcome" />
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

      


     {/* Upcoming Tests */}
     <section className={styles.section}>
        <h2>Upcoming Tests</h2>
        <div className={styles.calendarSection}>
          <div className={styles.testList}>
            {upcomingTests.map(test => (
              <div key={test.id} className={styles.testItem}>
                <div className={styles.testDate}>
                  <span>{format(new Date(test.date), 'EEE')}</span>
                  <span>{format(new Date(test.date), 'd')}</span>
                </div>
                <div className={styles.testSubject}>
                  {test.subject}
                </div>
              </div>
            ))}
          </div>
          <Calendar
            onChange={setDate}
            value={date}
            className={styles.calendar}

          
          />
        </div>
      </section>  

      {/* Notes Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Your notes</h2>
          <button className={styles.addNoteBtn}>+Add Note</button>
        </div>
        <div className={styles.notesContainer}>
          {notes.map(note => (
            <div key={note.id} className={styles.noteCard}>
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </div>
          ))}
          <button className={styles.seeAllBtn}>See all</button>
        </div>
      </section>
    

    
    
    
    </div>
  );
};

export default Dashboard;