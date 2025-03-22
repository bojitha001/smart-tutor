import React, { useState, useRef, useEffect } from 'react';
import styles from "../.ExternalCss/ChatbotWidget.module.css";
import ReactMarkdown from 'react-markdown';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your Smart Tutor assistant. How can I help you today?",
      sender: 'bot',
      time: formatTime(new Date()),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([
    'How do I find a tutor?',
    'What subjects are available?',
    'How do I schedule a session?',
    'What are the pricing plans?',
    'How do I create an account?',
    'How do I login to my account?'
  ]);
  const [sessionId, setSessionId] = useState('');
  const [resources, setResources] = useState([]);
  const [showResources, setShowResources] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

  // API endpoint (adjust if your backend runs on a different port)
  const API_BASE_URL = 'http://localhost:8080';

  useEffect(() => {
    // Generate a unique session ID for this chat
    if (!sessionId) {
      setSessionId(`session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`);
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
        throw new Error('Failed to fetch suggestions');
      }
      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
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
      const response = await fetch(`${API_BASE_URL}/chatbot/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: text,
          sessionId: sessionId
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Store any resources that came with the response
      if (data.resources && data.resources.length > 0) {
        setResources(data.resources);
      } else {
        setResources([]);
      }
      
      // Simulate typing for a more natural feel
      simulateTypingEffect(data.response, () => {
        // Hide typing indicator and add bot response
        setIsTyping(false);
        
        const newBotMessage = {
          text: data.response,
          sender: 'bot',
          time: formatTime(new Date()),
          source: data.source // 'faq', 'ai', or 'simple'
        };
        
        setMessages((prev) => [...prev, newBotMessage]);
      });
    } catch (error) {
      console.error('Error sending message to backend:', error);
      
      // Hide typing indicator and add error message
      setIsTyping(false);
      
      const errorMessage = {
        text: 'Sorry, there was an error processing your request. Please try again later.',
        sender: 'bot',
        time: formatTime(new Date()),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    }
  };