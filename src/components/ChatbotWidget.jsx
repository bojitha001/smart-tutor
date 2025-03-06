import React, { useState, useRef, useEffect } from 'react';
import styles from "../.ExternalCss/ChatbotWidget.module.css";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      time: formatTime(new Date()),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const suggestions = [
    'Pricing plans',
    'Integration options',
    'Setup guide',
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight();
    }
  }, [inputMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, 120);
    textarea.style.height = `${newHeight}px`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = {
      text: inputMessage.trim(),
      sender: 'user',
      time: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Here you would normally make a request to your Node.js backend
    // This is just a simulation
    setTimeout(() => {
      setIsTyping(false);
      
      const newBotMessage = {
        text: "Thanks for your message! I'll help you with that.",
        sender: 'bot',
        time: formatTime(new Date()),
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    sendMessage();
  };

  function formatTime(date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${ampm}`;
  }

  // Replace this with your actual API call
  const sendMessageToBackend = async (text) => {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      return data.response; // Assuming your backend returns a response field
    } catch (error) {
      console.error('Error sending message to backend:', error);
      return 'Sorry, there was an error processing your request.';
    }
  };

  return (
    <>
      {/* Chat Button (Closed State) */}
      {!isOpen && (
        <div className={styles.chatWidgetButton} onClick={toggleChat}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      )}

      {/* Chat Widget (Open State) */}
      {isOpen && (
        <div className={styles.chatWidget}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
              <div className={styles.headerAvatar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1zM7 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a1.5 1.5 0 1 0 2.12-2.12l-.354-.354.354-.354a1.5 1.5 0 1 0-2.12-2.12L13.6 1.7l-.013-.012A7 7 0 0 0 8 0H6.5zm2.5 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>
              </div>
              <div className={styles.headerInfo}>
                <h4>AI Assistant</h4>
                <span>Online</span>
              </div>
            </div>
            <div className={styles.closeButton} onClick={toggleChat}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}
              >
                {msg.text}
                <div className={styles.messageTime}>{msg.time}</div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className={styles.typingIndicator}>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
                <div className={styles.typingDot}></div>
              </div>
            )}
            
            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggestions */}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;