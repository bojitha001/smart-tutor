import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../.ExternalCss/HomePage.module.css";
import mainImage from "../assets/images/mainImg2.png";
import chatBot from "../assets/images/chatBot.png";
import sitting from "../assets/images/Home-sitting.png";
import icon1 from "../assets/images/RFID Signal.png";
import icon2 from "../assets/images/People Skin Type 7.png";
import icon3 from "../assets/images/Calendar 12.png";
import icon4 from "../assets/images/Test Results.png";
import icon5 from "../assets/images/Find and Replace.png";
import icon6 from "../assets/images/Brake Warning.png";
import FAQItem from "../components/FAQItem.jsx";
import ChatbotWidget from "./ChatbotWidget.jsx";

const categories = [
  { id: 1, name: "Biology", color: "#FFE9B1", icon: "🧬" },
  { id: 2, name: "Physics", color: "#E4D3FF", icon: "🚀" },
  { id: 3, name: "Chemistry", color: "#FFD6D6", icon: "🧪" },
  { id: 4, name: "Mathematics", color: "#D6E4FF", icon: "📐" },
  { id: 5, name: "ICT", color: "#D6FFF0", icon: "💻" },
  { id: 6, name: "Econ", color: "#F0E6C8", icon: "📊" },
  { id: 7, name: "Accounting", color: "#FFD6E8", icon: "📚" },
  { id: 8, name: "Business Studies", color: "#D6FFF6", icon: "💼" },
  { id: 9, name: "Agriculture", color: "#E3FFD6", icon: "🌱" },
];

const testimonials = [
  {
    id: 1,
    name: "T. Perera",
    role: "Student",
    image: "src/assets/images/tPerera.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "S. Silva",
    role: "Student",
    image: "src/assets/images/sSilva.jpg",
    text: "It has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: "A. Fernando",
    role: "Tutor",
    image: "src/assets/images/aFernando.jpg",
    text: "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    name: "S. Mendis",
    role: "Parent",
    image: "src/assets/images/sMendis.jpg",
    text: "Lorem Ipsum is not just random text; it has roots in classical Latin.",
  },
  {
    id: 5,
    name: "M. Smith",
    role: "Tutor",
    image: "src/assets/images/mSmith.jpg",
    text: "The passage has been used in typesetting for centuries.",
  },
];

const features = [
  {
    icon: <img src={icon1} alt="Progress Tracking" width="30" height="30" />,
    title: "Student Progress Tracking",
    description:
      "Track your academic progress in real time, including attendance and performance, and keep your parents informed of your growth.",
  },
  {
    icon: <img src={icon2} alt="Kuppi Groups" width="30" height="30" />,
    title: "Kuppi Groups",
    description:
      "Join collaborative study groups where you can work together with classmates, share notes, and help each other learn more effectively.",
  },
  {
    icon: <img src={icon3} alt="Event Calendar" width="30" height="30" />,
    title: "Event Calendar",
    description:
      "Stay organized and never miss important events, classes, or deadlines with the interactive event calendar.",
  },
  {
    icon: <img src={icon4} alt="Gamified Quizzes" width="30" height="30" />,
    title: "Gamified Quizzes and Assessments",
    description:
      "Challenge yourself with fun, gamified quizzes and assessments, and track your scores on the leaderboard for added motivation.",
  },
  {
    icon: <img src={icon5} alt="Search Filters" width="30" height="30" />,
    title: "Search with Filters for Students",
    description:
      "Find the perfect tutor or study resource with advanced search filters tailored to your needs.",
  },
  {
    icon: <img src={icon6} alt="Alerts" width="30" height="30" />,
    title: "Alerts and Notifications",
    description:
      "Receive reminders about upcoming classes, assignments, fee due dates, and special events so you stay up-to-date with your schedule.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Can I choose my own tutor?",
    answer:
      "Yes, you can choose your own tutor based on your requirements and tutor ratings.",
  },
  {
    id: 2,
    question: "How does the tutor rating system work?",
    answer:
      "Tutors are rated by students based on their performance and feedback.",
  },
  {
    id: 3,
    question: "Is there a trial session available?",
    answer: "Yes, we offer a free trial session with selected tutors.",
  },
  {
    id: 4,
    question: "What subjects do you offer tutoring for?",
    answer:
      "We offer tutoring for a wide range of subjects including Mathematics, Science, Languages, Humanities, and more.",
  },
  {
    id: 5,
    question: "How do I schedule a session?",
    answer:
      "You can schedule a session by selecting a tutor and choosing a convenient time slot from their availability calendar.",
  },
  {
    id: 6,
    question: "Do you offer group tutoring?",
    answer:
      "Yes, we provide group tutoring sessions at discounted rates. You can also join existing Kuppi Groups or create your own.",
  },
];

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [openId, setOpenId] = useState(null);

  // Update window width when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update visible testimonials based on screen size and current index
  useEffect(() => {
    if (windowWidth <= 768) {
      // Mobile: show only the active testimonial
      setVisibleTestimonials([testimonials[currentIndex]]);
    } else {
      // Desktop: show 3 testimonials (previous, active, next)
      const prevIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setVisibleTestimonials([
        testimonials[prevIndex],
        testimonials[currentIndex],
        testimonials[nextIndex],
      ]);
    }
  }, [currentIndex, windowWidth]);

  const goToPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  // Keyboard navigation for testimonials
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <div className={`${styles["container-1"]}`}>
        <div className={`${styles["container-2"]}`}>
          <h1 className={`${styles["Main-Title"]}`}>
            Your Path to Academic Success
          </h1>
          <p className={`${styles["Main-Des"]}`}>
            Connect with qualified, passionate tutors who are ready to help you
            achieve your learning goals, one session at a time.
          </p>

          <div className={`${styles["search-bar"]} input-group`}>
            <input
              type="text"
              className={`${styles["input-txt"]} form-control`}
              placeholder="Search for your success..."
              aria-label="Search"
            />
            <button className={`${styles["search-btn"]} btn`} type="button">
              Search
            </button>
          </div>

          <img
            className={`${styles["Main-Img"]}`}
            src={mainImage}
            alt="Students learning"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className={`${styles["categories-container"]}`}>
        <h1>Explore Top Categories</h1>
        <div className={`${styles["categories-grid"]}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles["category-box"]}`}
              style={{ backgroundColor: category.color }}
              aria-label={`${category.name} category`}
            >
              <span className={`${styles["category-icon"]}`}>
                {category.icon}
              </span>
              <span className={`${styles["category-name"]}`}>
                {category.name}
              </span>
            </button>
          ))}
        </div>
        <button
          className={`${styles["see-more-button"]}`}
          aria-label="See more categories"
        >
          See More <span className={`${styles["arrow"]}`}>→</span>
        </button>
        <img
          src={sitting}
          alt="Student illustration"
          className={styles["student-illustration"]}
        />
      </div>

      {/* Features Section */}
      <div className={`${styles["container-features"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["tagline"]}`}>
            Learn Smarter, Achieve More
          </h2>
          <h1 className={`${styles["title"]}`}>
            Enhancing Learning with
            <br />
            SMART <span className={`${styles["highlight"]}`}>TUTOR</span>
          </h1>
        </div>

        <div className={`${styles["features-grid"]}`}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles["feature-card"]}`}>
              <div className={`${styles["feature-icon"]}`}>{feature.icon}</div>
              <h3 className={`${styles["feature-title"]}`}>{feature.title}</h3>
              <p className={`${styles["feature-description"]}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`${styles["testimonials-container"]}`}>
        <h1>Testimonials</h1>
        <div className={`${styles["testimonials-slider"]}`}>
          <button
            className={`${styles["nav-button"]} ${styles["prev"]}`}
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className={`${styles["testimonials-wrapper"]}`}>
            {windowWidth <= 768 ? (
              // Mobile view - show only current testimonial
              <div
                key={testimonials[currentIndex].id}
                className={`${styles["testimonial-card"]} ${styles["active"]}`}
              >
                <div className={`${styles["avatar"]}`}>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                </div>
                <h2>{testimonials[currentIndex].name}</h2>
                <p className={`${styles["role"]}`}>
                  {testimonials[currentIndex].role}
                </p>
                <p className={`${styles["testimonial-text"]}`}>
                  {testimonials[currentIndex].text}
                </p>
              </div>
            ) : (
              // Desktop view - show 3 testimonials
              [...Array(3)].map((_, i) => {
                const index =
                  (currentIndex + i - 1 + testimonials.length) %
                  testimonials.length;
                let position = i === 0 ? "small" : i === 1 ? "active" : "small";

                return (
                  <div
                    key={testimonials[index].id}
                    className={`${styles["testimonial-card"]} ${styles[position]}`}
                  >
                    <div className={`${styles["avatar"]}`}>
                      <img
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                      />
                    </div>
                    <h2>{testimonials[index].name}</h2>
                    <p className={`${styles["role"]}`}>
                      {testimonials[index].role}
                    </p>
                    <p className={`${styles["testimonial-text"]}`}>
                      {testimonials[index].text}
                    </p>
                  </div>
                );
              })
            )}
          </div>

          <button
            className={`${styles["nav-button"]} ${styles["next"]}`}
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`${styles["faq-container"]}`}>
        <h1>Frequently Asked Questions</h1>
        <p className={`${styles["subtitle"]}`}>
          Find quick answers to common questions about our tutoring service
        </p>

        <div className={`${styles["faq-list"]}`}>
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => handleClick(faq.id)}
            />
          ))}
        </div>
      </div>

      {/* Chatbot */}
      {/* {chatBot && (
        <img
          className={styles["chat-bot"]}
          src={chatBot}
          alt="Chat with us"
          onClick={() => console.log("Chatbot clicked")}
        />
      )} */}

      <ChatbotWidget/>
    </>
  );
};
