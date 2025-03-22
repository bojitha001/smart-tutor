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