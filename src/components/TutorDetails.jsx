import { Star, Mail, Phone, GraduationCap, Clock } from "lucide-react";
import styles from "../styles/profile.module.css";

const TutorDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
            alt="bojitha nawarathne"
            className={styles.profileImage}
          />
        </div>
        <h1 className={styles.name}>Bojitha Nawarathna</h1>
        <div className={styles.rating}>
          <Star className={styles.starIcon} size={20} />
          <span>4.9/5</span>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.bioSection}>
          <h2>About Me</h2>
          <p>
            A passionate mathematics educator with over a decade of experience
            in teaching advanced mathematical concepts. Specializing in
            calculus, linear algebra, and statistical analysis. My teaching
            approach combines theoretical understanding with practical
            applications, making complex mathematical concepts accessible to
            students at all levels.
          </p>
        </div>

        <div className={styles.educationSection}>
          <h2>
            <GraduationCap className={styles.sectionIcon} />
            Education
          </h2>
          <ul>
            <li>Ph.D. in Mathematics - Stanford University</li>
            <li>M.Sc. in Applied Mathematics - MIT</li>
            <li>B.Sc. in Mathematics (First Class) - Oxford University</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
