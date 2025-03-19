import { useState, useEffect } from "react";
import styles from "../.ExternalCss/FindTutor.module.css";
import { useUser } from "@clerk/clerk-react";

// const SAMPLE_TUTORS = [
// {
//   id: 1,
//   name: 'Sam Sadunka',
//   degree: 'MSc - Computer Science',
//   subject: 'Computer Science',
//   level: 'Higher',
//   bio: 'As a Computer Science graduate with more than 4 years of teaching experience, I am passionate about making this subject easy to understand. My teaching style is interactive and focused on practical examples and problem-solving.',
//   price: 3000,
//   reviews: 0,
//   lessons: 40,
//   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
// },


const FindTutor = () => {
  const [SAMPLE_TUTORS, setSAMPLE_TUTORS] = useState([]);
  const [subject, setSubject] = useState("All subjects");
  const [level, setLevel] = useState("All levels");
  const [price, setPrice] = useState("All prices");
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const TUTORS_PER_PAGE = 4;

  
  // useEffect(() => {
  //   const getTeachers = async () => {
  //     const res = await fetch("http://localhost:8000/teachers", {
  //       method: "GET",
  //     });
  //     const teachers = await res.json();
  //     console.log(teachers)
  //     setSAMPLE_TUTORS(teachers);
  //   };

  //   getTeachers();
  // }, []);

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8080/teachers", {
          method: "GET",
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        const teachers = await res.json();
        console.log("Teachers fetched:", teachers); 
        
        setTutors(teachers);
        setSAMPLE_TUTORS(teachers);
        setFilteredTutors(teachers);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);


  // Fetch tutors (using sample data for now)
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        setTutors(SAMPLE_TUTORS);
        setFilteredTutors(SAMPLE_TUTORS);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, [SAMPLE_TUTORS]);

  // Apply filters
  useEffect(() => {
    let filtered = [...tutors];

    // Filter by subject
    if (subject !== "All subjects") {
      filtered = filtered.filter((tutor) => tutor.subject === subject);
    }

    // Filter by level
    if (level !== "All levels") {
      filtered = filtered.filter((tutor) => tutor.level === level);
    }

    // Filter by price
    if (price !== "All prices") {
      const [min, max] = price
        .split("-")
        .map((p) => parseInt(p.replace(/[^\d]/g, "")));
      filtered = filtered.filter((tutor) => {
        if (price === "4000+") {
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
      await new Promise((resolve) => setTimeout(resolve, 500));
      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking tutor:", error);
      alert("Failed to book tutor. Please try again.");
    }
  };

  // const handleBookATutor = async () => {
  //   const token = await window.Clerk.session.getToken();

  //   const res = await fetch(`http://localhost:8000/teachers`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json", //saying we are passing a json
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(jobApplicaion),
  //   });
  // }


  return (
    <div className={styles.container}>
      

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
                    Explore more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <button className={styles.showMoreBtn} onClick={handleShowMore}>
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
