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



  return (
    <div className={styles.container}>
      
        <div className={styles.pendingPayment}>
          <h2>Pending Payment</h2>
          <div className={styles.amount}>LKR 12,000</div>
          <button onClick={handlePayClick} className={styles.payButton}>
            Pay
          </button>
          <p className={styles.deadline}>Need to be done before 31st March</p>
        </div>
       
        <div className={styles.paymentMethods}>
          <h2>Select Payment Method!</h2>
          <div className={styles.cardContainer}>
            {savedCards.map(card => (
             
              <div key={card.id} className={styles.card}>
                <div className={styles.bankName}>{card.bank}</div>
                <div className={styles.cardNumber}>{card.number}</div>
                <div className={styles.cardExpiry}>{card.expiry}</div>
               
              </div>
             
              
            ))}
            <button onClick={handleAddCard} className={styles.addCardButton}>
              + Add Card
            </button>
          </div>
        </div>

        
      

<div className={styles.paymentHistory}>
        <h2>Payment History</h2>
        <table className={styles.historyTable}>
          <thead>
            <tr>
              <th>Transaction No.</th>
              <th>Date & Time</th>
              <th>To user</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map(transaction => (
              <tr key={transaction.transactionNo}>
                <td>{transaction.transactionNo}</td>
                <td>{transaction.date}</td>
                <td>{transaction.user}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      
    </div>
  );
};

export default StudentPayment;