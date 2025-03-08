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
          
        </>
      )}
    </div>
  );
}

export default CourseCard;