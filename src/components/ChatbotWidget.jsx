import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentDots,faTimes,faMinus,
  faPaperPlane,
  faChevronDown,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../.ExternalCss/ChatbotWidget.module.css";
import ReactMarkdown from "react-markdown";
import logo from "../assets/images/LOGO SM.png";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your Smart Tutor assistant. How can I help you today?",
      sender: "bot",
      time: formatTime(new Date()),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "How do I find a tutor?",
    "What subjects are available?",
    "How do I schedule a session?",
    "What are the pricing plans?",
    "How do I create an account?",
    "How do I login to my account?",
    "Do you offer group sessions?",
    "Can I see tutor reviews?",
    "How do I cancel a session?",
    "Are there any discounts available?",
    "How do I become a tutor?",
    "Is there a mobile app?",
  ]);
  const [sessionId, setSessionId] = useState("");
  const [resources, setResources] = useState([]);
  const [showResources, setShowResources] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const suggestionsRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

  // API endpoint (adjust if your backend runs on a different port)
  const API_BASE_URL = "http://localhost:8080";

  useEffect(() => {
    // Generate a unique session ID for this chat
    if (!sessionId) {
      setSessionId(
        `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
      );
    }
  }, [sessionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight();
    }
  }, [inputMessage]);

  // Fetch suggested questions when chat is opened
  useEffect(() => {
    if (isOpen && !minimized) {
      fetchSuggestions();
    }
  }, [isOpen, minimized]);
  
  const fetchSuggestions = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/chatbot/suggestions`);
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }
      const data = await response.json();
      // If API returns suggestions, use them; otherwise, keep the default ones
      if (data.suggestions && data.suggestions.length > 0) {
        setSuggestions(data.suggestions);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      // Keep default suggestions on error
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    if (isOpen && minimized) {
      setMinimized(false);
    } else {
      setIsOpen(!isOpen);
      setMinimized(false);
    }
  };

  const minimizeChat = (e) => {
    e.stopPropagation();
    setMinimized(true);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, 120);
    textarea.style.height = `${newHeight}px`;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newUserMessage = {
      text: inputMessage.trim(),
      sender: "user",
      time: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");

    // Show typing indicator
    setIsTyping(true);
    setShowResources(false);

    // Send message to backend
    sendMessageToBackend(newUserMessage.text);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    sendMessage();
  };

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  function formatTime(date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  }

  // Simulate typing effect for longer responses
  const simulateTypingEffect = (response, callback) => {
    // For longer responses (like from AI), simulate a realistic typing delay
    // based on response length
    const typingDelay = Math.min(
      1200, // minimum delay
      Math.max(600, response.length / 10) // at least 600ms, at most 1200ms
    );

    setTimeout(() => {
      callback();
    }, typingDelay);
  };

  // Send message to backend and get response
  const sendMessageToBackend = async (text) => {
    try {
      // In a real implementation, this would call your actual backend
      // For now, we're simulating a response
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let responseText = "I don't have information about that yet. Our team is still working on improving my knowledge base. Is there anything else I can help you with?";
      let responseResources = [];
      
      // Simple keyword matching for demo purposes
      if (text.toLowerCase().includes("tutor")) {
        responseText = "You can find a tutor by using the 'Find a Tutor' option in the main menu. You can filter tutors by subject, experience level, and availability.";
        responseResources = [
          { title: "How to choose the right tutor", url: "/guides/choosing-tutor" },
          { title: "Tutor qualifications", url: "/about/tutor-standards" }
        ];
      } else if (text.toLowerCase().includes("pricing") || text.toLowerCase().includes("cost") || text.toLowerCase().includes("price")) {
        responseText = "Our pricing depends on the tutor's experience and qualifications. Basic sessions start at Rs. 2000 per hour, while sessions with specialized tutors may cost up to Rs. 4000 per hour.";
        responseResources = [
          { title: "Pricing details", url: "/pricing" },
          { title: "Discount packages", url: "/pricing/packages" }
        ];
      } else if (text.toLowerCase().includes("schedule") || text.toLowerCase().includes("booking") || text.toLowerCase().includes("book")) {
        responseText = "To schedule a session, first select a tutor from the 'Find a Tutor' page, then click on 'Book Session' on their profile. You can choose a date and time that works for you from their available slots.";
      } else if (text.toLowerCase().includes("account")) {
        responseText = "You can create an account by clicking the 'Sign Up' button in the top-right corner of the homepage. You'll need to provide your email address and create a password. For login issues, you can use the 'Forgot Password' option on the login page.";
      }

      // Simulate typing for a more natural feel
      simulateTypingEffect(responseText, () => {
        // Hide typing indicator and add bot response
        setIsTyping(false);

        const newBotMessage = {
          text: responseText,
          sender: "bot",
          time: formatTime(new Date()),
          source: "ai", // Simulating AI response
        };

        setMessages((prev) => [...prev, newBotMessage]);
        
        // Set resources if any
        if (responseResources.length > 0) {
          setResources(responseResources);
        } else {
          setResources([]);
        }
      });
    } catch (error) {
      console.error("Error sending message to backend:", error);

      // Hide typing indicator and add error message
      setIsTyping(false);

      const errorMessage = {
        text: "Sorry, there was an error processing your request. Please try again later.",
        sender: "bot",
        time: formatTime(new Date()),
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  
  return (
    <>
      {/* Chat Button (Closed State) */}
      {!isOpen && (
        <div className={styles.chatWidgetButton} onClick={toggleChat}>
          <FontAwesomeIcon icon={faCommentDots} />
          <span className={styles.chatButtonLabel}>Ask Smart AI</span>
        </div>
      )}

      {/* Minimized Chat Widget */}
      {isOpen && minimized && (
        <div className={styles.minimizedChat} onClick={toggleChat}>
          <div className={styles.minimizedAvatar}>
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <div className={styles.minimizedText}>Tutor AI</div>
        </div>
      )}

      {/* Chat Widget (Open State) */}
      {isOpen && !minimized && (
        <div className={styles.chatWidget}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
              <div className={styles.headerAvatar}>
                <FontAwesomeIcon icon={faCommentDots} />
              </div>
              <div className={styles.headerInfo}>
                <h4>Tutor AI Assistant</h4>
                <span>Online</span>
              </div>
            </div>
            <div className={styles.headerActions}>
              <div
                className={styles.actionIcon}
                onClick={minimizeChat}
                title="Minimize"
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div
                className={styles.actionIcon}
                onClick={toggleChat}
                title="Close"
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}>
            <div className={styles.welcomeSection}>
              <div className={styles.welcomeAvatar}>
              <img src={logo} alt="Tutor AI" className={styles.avatarImage} />
              </div>
              <h3 className={styles.welcomeTitle}>Smart Tutor AI</h3>
              <p className={styles.welcomeText}>
                Ask me anything about Smart Tutor platform, how to find tutors,
                schedule sessions, or any other questions you might have.
              </p>
            </div>

            {messages.slice(1).map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.sender === "bot" ? styles.botMessage : styles.userMessage
                }`}
              >
                {msg.sender === "bot" && (
                  <div className={styles.botAvatar}>
                    <FontAwesomeIcon icon={faCommentDots} />
                  </div>
                )}
                <div className={styles.messageContent}>
                  <div className={styles.messageText}>
                    {typeof ReactMarkdown === "function" ? (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: msg.text.replace(/\n/g, "<br />"),
                        }}
                      />
                    )}
                  </div>
                  <div className={styles.messageTime}>{msg.time}</div>

                  {/* Show resources if available and it's a bot message */}
                  {msg.sender === "bot" &&
                    resources.length > 0 &&
                    messages[messages.length - 1] === msg && (
                      <div className={styles.resourcesContainer}>
                        <button
                          className={styles.resourcesToggle}
                          onClick={toggleResources}
                        >
                          {showResources
                            ? "Hide Resources"
                            : "Show Related Resources"}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className={showResources ? styles.iconRotated : ""}
                          />
                        </button>

                        {showResources && (
                          <div className={styles.resourcesList}>
                            {resources.map((resource, idx) => (
                              <a
                                key={idx}
                                href={resource.url}
                                className={styles.resourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FontAwesomeIcon icon={faBook} />
                                {resource.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className={styles.typingIndicator}>
                <div className={styles.botAvatar}>
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
                <div className={styles.typingDots}>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                </div>
              </div>
            )}

            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions - Now with scrollbar and reduced height */}
          {messages.length < 3 && (
            <div className={styles.suggestionsContainer}>
              <h4 className={styles.suggestionsTitle}>
                Frequently asked questions
              </h4>
              <div className={styles.suggestions} ref={suggestionsRef}>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={styles.suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className={styles.inputContainer}>
            <textarea
              ref={textareaRef}
              className={styles.inputField}
              placeholder="Type your message..."
              value={inputMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <div className={styles.actionButton} onClick={sendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;