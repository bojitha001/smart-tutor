import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faTimes,
  faMinus,
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
  ]);
  const [sessionId, setSessionId] = useState("");
  const [resources, setResources] = useState([]);
  const [showResources, setShowResources] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

  
  const API_BASE_URL = "http://localhost:8080";

  useEffect(() => {
    
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
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
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

    
    setIsTyping(true);
    setShowResources(false);

    
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

  
  const simulateTypingEffect = (response, callback) => {
    const typingDelay = Math.min(
      1200, 
      Math.max(600, response.length / 10) 
    );

    setTimeout(() => {
      callback();
    }, typingDelay);
  };

  
  const sendMessageToBackend = async (text) => {
    try {
      const response = await fetch(`${API_BASE_URL}/chatbot/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      
      if (data.resources && data.resources.length > 0) {
        setResources(data.resources);
      } else {
        setResources([]);
      }

      
      simulateTypingEffect(data.response, () => {
       
        setIsTyping(false);

        const newBotMessage = {
          text: data.response,
          sender: "bot",
          time: formatTime(new Date()),
          source: data.source, 
        };

        setMessages((prev) => [...prev, newBotMessage]);
      });
    } catch (error) {
      console.error("Error sending message to backend:", error);

    
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
      
      {!isOpen && (
        <div className={styles.chatWidgetButton} onClick={toggleChat}>
          <FontAwesomeIcon icon={faCommentDots} />
          <span className={styles.chatButtonLabel}>Ask Smart AI</span>
        </div>
      )}

      
      {isOpen && minimized && (
        <div className={styles.minimizedChat} onClick={toggleChat}>
          <div className={styles.minimizedAvatar}>
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <div className={styles.minimizedText}>Tutor AI</div>
        </div>
      )}

     
      {isOpen && !minimized && (
        <div className={styles.chatWidget}>
          
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

            
            <div ref={messagesEndRef} />
          </div>

         
          {messages.length < 3 && (
            <div className={styles.suggestionsContainer}>
              <h4 className={styles.suggestionsTitle}>
                Frequently asked questions
              </h4>
              <div className={styles.suggestions}>
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
