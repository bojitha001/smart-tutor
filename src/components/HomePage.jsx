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
import student from "../assets/images/student.png";
import tutor from "../assets/images/tutor.png";
import parent from "../assets/images/parent.png";
import tutorblock from "../assets/images/tutorblock.png";
import studentblock from "../assets/images/studentblock.png";

const testimonials = [
  {
    id: 1,
    name: "Ayesha R.",
    role: "(AL Student)",
    image: "src/assets/images/tPerera.jpg",
    text: "Smart Tutor made studying so much easier! I found the perfect tutor for ICT, and their teaching style matched exactly what I needed. My grades have improved, and I actually enjoy learning now!",
  },
  {
    id: 2,
    name: "Kavindu P.",
    role: "(University Student)",
    image: "src/assets/images/sSilva.jpg",
    text: "The study groups on Smart Tutor’s Discord helped me stay accountable and motivated. Learning with others makes a huge difference!",
  },
  {
    id: 3,
    name: "Tharindu Fernando",
    role: "(ICT Tutor)",
    image: "src/assets/images/aFernando.jpg",
    text: "Smart Tutor gave me the opportunity to teach passionate students while earning flexibly. The platform is smooth, and I’ve built great relationships with my students!",
  },
  {
    id: 4,
    name: "Isuri M.",
    role: "(Math Tutor)",
    image: "src/assets/images/sMendis.jpg",
    text: "Being a tutor on Smart Tutor has been an amazing experience! The student engagement is great, and the support from the platform helps me focus on teaching.",
  },
  {
    id: 5,
    name: "Mrs. Perera ",
    role: "(Parent of a Grade 10 Student)",
    image: "src/assets/images/mSmith.jpg",
    text: "Finding a reliable tutor for my child was so stressful—until we found Smart Tutor. Now, they have a dedicated tutor who truly understands their needs. Best decision ever!",
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

const who = [
  {
    id: 1,
    image: student,
    title: "Student",
    subtitle:
      "Studying smart is just as important as studying hard. Use techniques like Pomodoro, active recall, and the Feynman method to boost learning. Stay consistent, set SMART goals, and remember—mistakes are just lessons in disguise!",
  },
  {
    id: 2,
    image: tutor,
    title: "Tutor",
    subtitle:
      "Great tutors don’t just teach—they inspire. Focus on understanding student needs, simplifying complex topics, and encouraging active learning. A tutor’s impact isn’t measured by answers given but by curiosity sparked and confidence built.",
  },
  {
    id: 3,
    image: parent,
    title: "Parent",
    subtitle:
      "Education isn’t just about grades—it’s about growth. Support your child by encouraging curiosity, creating a positive learning environment, and celebrating progress. Your belief in them shapes their confidence and success!",
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

      <div className={styles["who-container"]}>
        <h1>Who is SMART TUTOR for?</h1>
        <div className={styles["who-header"]}>
          <h2 className={styles["who-tagline"]}>
            We Provide - We Market - We Monitor
          </h2>
        </div>
        <div className={styles["card-grid"] + " " + styles["who-grid"]}>
          {who.map((post) => (
            <div
              className={styles["card"] + " " + styles["who-card"]}
              key={post.id}
            >
              <div className={styles["card-image"]}>
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-title"]}>{post.title}</h3>
                <p className={styles["card-subtitle"]}>{post.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* tutor block */}
      <div className={`${styles["container-block"]}`}>
        <img className={`${styles["block-img"]}`} src={tutorblock}></img>
        <div className={`${styles["block-container"]}`}>
          <h2 className={`${styles["block-numbers"]}`}>01. Market</h2>
          <p className={`${styles["block-desc"]}`}>
            Connecting with students, parents, and tutors to meet educational
            needs.
          </p>
          <h2 className={`${styles["block-numbers"]}`}>02. Brand</h2>
          <p className={`${styles["block-desc"]}`}>
            Building trust and a consistent, positive identity for Smart Tutor.
          </p>
          <h2 className={`${styles["block-numbers"]}`}>03. Expand</h2>
          <p className={`${styles["block-desc"]}`}>
            Growing through new subjects, more users, and platform improvements.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className={`${styles["container-features"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["tagline2"]}`}>
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

      {/* student block */}
      <div className={`${styles["container-block2"]}`}>
        <div className={`${styles["block2-container"]}`}>
          <h2 className={`${styles["block2-numbers"]}`}>
            04. Personalized Learning
          </h2>
          <p className={`${styles["block2-desc"]}`}>
            Find tutors that match your learning style and academic needs.
          </p>
          <h2 className={`${styles["block2-numbers"]}`}>
            05. Collaborative Study{" "}
          </h2>
          <p className={`${styles["block2-desc"]}`}>
            Engage in group learning and share resources to improve together.
          </p>
          <h2 className={`${styles["block2-numbers"]}`}>06. Convenience</h2>
          <p className={`${styles["block2-desc"]}`}>
            Study at your own pace, on your own time, from anywhere.
          </p>
        </div>
        <img className={`${styles["block2-img"]}`} src={studentblock}></img>
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

      <ChatbotWidget />
    </>
  );
};
