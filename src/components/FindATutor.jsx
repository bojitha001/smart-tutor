import { useState, useEffect } from "react";
import styles from "../.ExternalCss/FindTutor.module.css";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router";

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
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const { isLoaded, isSignedIn, user } = useUser();

  // Toggle filters on mobile
  const toggleFilters = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://www.smarttutor.lk/teachers", {
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
      // alert("Booking successful!");
    } catch (error) {
      console.error("Error booking tutor:", error);
      alert("Failed to book tutor. Please try again.");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <button
          className={styles.filtersBtn}
          onClick={toggleFilters}
          style={{ marginBottom: "1rem", display: "block", width: "auto" }}
        >
          {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </button>

        {isFilterVisible && (
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

            <button className={styles.filtersBtn}>Apply</button>
          </div>
        )}

        {loading ? (
          <div className={styles.loading}>Loading tutors...</div>
        ) : (
          <>
            <div className={styles.tutorList}>
              {displayedTutors.map((tutor) => (
                <div key={tutor.id} className={styles.tutorCard}>
                  <div className={styles.tutorImage}>
                    <img
                      src={tutor.userImageUrl}
                      alt={tutor.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/70";
                      }}
                    />
                  </div>
                  <div className={styles.tutorInfo}>
                    <h3>{tutor.name}</h3>
                    <p className={styles.degree}>{tutor.degree}</p>
                    <p className={styles.bio}>
                      {tutor.bio && tutor.bio.length > 150
                        ? `${tutor.bio.substring(0, 150)}...`
                        : tutor.bio}
                    </p>
                    <div className={styles.hashTagsContainer}>
                      {tutor.keyWords &&
                        tutor.keyWords.map((keyword, index) => (
                          <p key={index} className={styles.hashTags}>
                            {keyword}
                          </p>
                        ))}
                    </div>
                  </div>
                  <div className={styles.tutorStats}>
                    <Link to={`/find-tutor/${tutor._id}`}>
                      <button
                        className={styles.bookBtn}
                        onClick={() => handleBookTutor(tutor.id)}
                      >
                        Explore more
                      </button>
                    </Link>
                    <div className={styles.stats}>
                      <p>{tutor.reviews || 0} reviews</p>
                      <p>{tutor.lessons || 0} lessons</p>
                    </div>
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
    </div>
  );
};

export default FindTutor;
