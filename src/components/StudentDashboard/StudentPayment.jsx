import styles from "../../.ExternalCss/StudentPayement.module.css"


import { useState } from 'react';


const StudentPayment = () => {
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [savedCards, setSavedCards] = useState([
    { id: 1, number: '1233 3232 4344 7757', expiry: '06/25', bank: 'Commercial Bank' },
    { id: 2, number: '1233 3232 4344 7757', expiry: '06/25', bank: 'Commercial Bank' }
  ]);

  const [paymentHistory] = useState([
    { 
      transactionNo: '405678',
      date: '1st March 2025 13:41',
      user: 'Vihan Mendis',
      category: '- Class fees',
      amount: 'LKR 4,000'
    },
    {
      transactionNo: '405695',
      date: '3rd March 2025 19:50',
      user: 'Samadhi Munasinghe',
      category: '- Class fees',
      amount: 'LKR 4,500'
    },
    {
      transactionNo: '407947',
      date: '3rd March 2025 21:50',
      user: 'Me',
      category: '+ Added to Pendings',
      amount: 'LKR 12,000'
    }
  ]);

  const [paymentStatus] = useState([
    { class: 'Maths - Bojitha Nawarathna', status: 'Pending' },
    { class: 'ICT - Vihan Mendis', status: 'Paid' },
    { class: 'Science - Samadhi Sandumika', status: 'Paid' }
  ]);

  const handlePayClick = () => {
    setShowPaymentMethods(true);
  };

  const handleAddCard = () => {
    // Add card functionality would go here
    console.log('Add new card');
  };

  
};

export default StudentPayment;