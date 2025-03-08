// import './CourseCard.css';

function CourseCard({ course, type }) {
  return (
    <div className={`course-card ${type}`}>
      {type === 'enrolled' ? (
        <>
          <div className="course-header">
            <div className="course-tag">{course.tag}</div>
            <h3 className="course-title">{course.title}</h3>
            <div className="course-progress">
              <span>Progress: {course.progress}%</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="course-footer">
            <img src={course.image} alt={course.title} className="course-image" />
            <button className={course.progress > 0 ? "button primary-button" : "button secondary-button"}>
              {course.progress > 0 ? 'Continue' : 'Start'}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="upcoming-course-image">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="upcoming-course-content">
            <div className="course-tag">{course.tag}</div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-meta">
              <div className="course-duration">
                <span>{course.duration}</span>
              </div>
              <div className="course-lessons">
                <span>{course.lessons} lessons</span>
              </div>
            </div>
            <div className="course-instructors">
              <div className="instructor-avatars">
                {course.instructors.map((instructor, index) => (
                  <img 
                    key={index} 
                    src={instructor} 
                    alt="Instructor" 
                    className="instructor-avatar" 
                  />
                ))}
              </div>
              <button className="button primary-button">Buy course</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CourseCard;