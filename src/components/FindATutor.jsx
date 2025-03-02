import { useState, useEffect } from "react";
import styles from "../.ExternalCss/FindTutor.module.css";

// Sample data for development
const SAMPLE_TUTORS = [
  {
    id: 1,
    name: 'Sam Sadunka',
    degree: 'MSc - Computer Science',
    subject: 'Computer Science',
    level: 'Higher',
    bio: 'As a Computer Science graduate with more than 4 years of teaching experience, I am passionate about making this subject easy to understand. My teaching style is interactive and focused on practical examples and problem-solving.',
    price: 3000,
    reviews: 0,
    lessons: 40,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Vihan Mendis',
    degree: 'MSc - SE',
    subject: 'Computer Science',
    level: 'Higher',
    bio: 'As a Software Engineering professional with more than 5 years of teaching experience, I am dedicated to helping students master complex concepts through practical examples.',
    price: 3000,
    reviews: 0,
    lessons: 45,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Priya Kumar',
    degree: 'PhD - Mathematics',
    subject: 'Mathematics',
    level: 'A/L',
    bio: 'Mathematics educator with a passion for making complex concepts simple. Specialized in calculus and linear algebra with 6 years of teaching experience.',
    price: 3500,
    reviews: 12,
    lessons: 150,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Alex Chen',
    degree: 'MSc - Physics',
    subject: 'Physics',
    level: 'O/L',
    bio: 'Experienced physics tutor specializing in making fundamental concepts clear and engaging. Strong focus on practical applications and real-world examples.',
    price: 2500,
    reviews: 8,
    lessons: 95,
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'Maya Patel',
    degree: 'BSc - Mathematics',
    subject: 'Mathematics',
    level: 'A/L',
    bio: 'Dedicated mathematics tutor with a talent for breaking down complex problems into simple steps. Specializing in algebra and geometry.',
    price: 2000,
    reviews: 15,
    lessons: 120,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    name: 'Alex Chen',
    degree: 'MSc - Physics',
    subject: 'Physics',
    level: 'O/L',
    bio: 'Experienced physics tutor specializing in making fundamental concepts clear and engaging. Strong focus on practical applications and real-world examples.',
    price: 2500,
    reviews: 8,
    lessons: 95,
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    name: 'Maya Patel',
    degree: 'BSc - Mathematics',
    subject: 'Mathematics',
    level: 'A/L',
    bio: 'Dedicated mathematics tutor with a talent for breaking down complex problems into simple steps. Specializing in algebra and geometry.',
    price: 2000,
    reviews: 15,
    lessons: 120,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const FindTutor = () => {
  const [subject, setSubject] = useState('All subjects');
  const [level, setLevel] = useState('All levels');
  const [price, setPrice] = useState('All prices');
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const TUTORS_PER_PAGE = 4;

  // Fetch tutors (using sample data for now)
    useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setTutors(SAMPLE_TUTORS);
        setFilteredTutors(SAMPLE_TUTORS);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...tutors];

    // Filter by subject
    if (subject !== 'All subjects') {
      filtered = filtered.filter(tutor => tutor.subject === subject);
    }

    // Filter by level
    if (level !== 'All levels') {
      filtered = filtered.filter(tutor => tutor.level === level);
    }

    // Filter by price
    if (price !== 'All prices') {
      const [min, max] = price.split('-').map(p => parseInt(p.replace(/[^\d]/g, '')));
      filtered = filtered.filter(tutor => {
        if (price === '4000+') {
          return tutor.price >= 4000;
        }
        return tutor.price >= min && tutor.price <= max;
      });
    }

    setFilteredTutors(filtered);
    setPage(1); // Reset to first page when filters change
    setHasMore(filtered.length > TUTORS_PER_PAGE);
  }, [subject, level, price, tutors]);

  // Get current page tutors
  const displayedTutors = filteredTutors.slice(0, page * TUTORS_PER_PAGE);

  const handleShowMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setHasMore(filteredTutors.length > nextPage * TUTORS_PER_PAGE);
  };

  const handleBookTutor = async (tutorId) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      alert('Booking successful!');
    } catch (error) {
      console.error('Error booking tutor:', error);
      alert('Failed to book tutor. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <div className={styles.logo}>
            <h2><span>SMART</span> TUTOR</h2>
        </div> */}
        <p>Private tutors that fit your schedule, ready to help you succeed.</p>
        <button className={styles.bookTutorBtn}>Book a Tutor</button>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label>Subject</label>
          <select 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)}
            className={styles.select}
          >
            <option value="All subjects">All subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Computer Science">Computer Science</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Level</label>
          <select 
            value={level} 
            onChange={(e) => setLevel(e.target.value)}
            className={styles.select}
          >
            <option value="All levels">All levels</option>
            <option value="O/L">O/L</option>
            <option value="A/L">A/L</option>
            <option value="Higher">Higher</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label>Price</label>
          <select 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
            className={styles.select}
          >
            <option value="All prices">All prices</option>
            <option value="0-2000">Rs. 0 - 2000</option>
            <option value="2000-4000">Rs. 2000 - 4000</option>
            <option value="4000+">Rs. 4000+</option>
          </select>
        </div>

        <button className={styles.filtersBtn}>Filters</button>
      </div>

      {loading ? (
        <div className={styles.loading}>Loading tutors...</div>
      ) : (
        <>
          <div className={styles.tutorList}>
            {displayedTutors.map((tutor) => (
              <div key={tutor.id} className={styles.tutorCard}>
                <div className={styles.tutorImage}>
                  <img src={tutor.image} alt={tutor.name} />
                </div>
                <div className={styles.tutorInfo}>
                  <h3>{tutor.name}</h3>
                  <p className={styles.degree}>{tutor.degree}</p>
                  <p className={styles.bio}>{tutor.bio}</p>
                </div>
                <div className={styles.tutorStats}>
                  <p className={styles.price}>Rs. {tutor.price}/hr</p>
                  <div className={styles.stats}>
                    <p>{tutor.reviews} reviews</p>
                    <p>{tutor.lessons} lessons</p>
                  </div>
                  <button 
                    className={styles.bookBtn}
                    onClick={() => handleBookTutor(tutor.id)}
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <button 
              className={styles.showMoreBtn}
              onClick={handleShowMore}
            >
              See more tutors
            </button>
          )}

          {!loading && displayedTutors.length === 0 && (
            <div className={styles.noResults}>
              No tutors found matching your criteria
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FindTutor;