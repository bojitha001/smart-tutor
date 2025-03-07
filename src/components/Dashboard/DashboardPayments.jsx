import React from "react";
import { Wallet, BanknoteIcon, CoinsIcon, ChevronDown } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import styles from "../../.ExternalCss/dashboardPayments.module.css";
import testImg from "../../assets/images/Avatar1.jpg";

const DashboardPayments = () => {
  const transactions = [
    {
      date: "Today",
      name: "Farhan",
      type: "Bank transfer",
      amount: "Rs. 2,500.00",
    },
    { date: "20/01", name: "Yeheni", type: "Cash", amount: "Rs. 2,500.00" },
    {
      date: "20/01",
      name: "Sam",
      type: "Bank transfer",
      amount: "Rs. 2,500.00",
    },
    {
      date: "19/01",
      name: "Manilka",
      type: "Bank transfer",
      amount: "Rs. 2,500.00",
    },
    { date: "19/01", name: "Garuka", type: "Cash", amount: "Rs. 2,500.00" },
    { date: "19/01", name: "Bojitha", type: "Cash", amount: "Rs. 2,500.00" },
    {
      date: "18/01",
      name: "Thevinu",
      type: "Bank transfer",
      amount: "Rs. 2,500.00",
    },
    {
      date: "18/01",
      name: "Sayuni",
      type: "Bank transfer",
      amount: "Rs. 2,500.00",
    },
  ];

  return (
    <div className={styles.dashboard}>
      <header>
        <div className={styles["search-bar"]}>
          <IoSearch />
          <input type="text" placeholder="Search here..." />
        </div>
        <div className={styles["profile-section"]}>
          <FaBell className={styles["notification-icon"]} />
          <div className={styles["profile-info"]}>
            <img
              src={testImg}
              alt="Profile"
              className={styles["profile-pic"]}
            />
            <div>
              <div className={styles["profile-name"]}>Sarah Perera</div>
              <div className={styles["profile-username"]}>@sarah123</div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Smart Tutor Wallet Section */}
        <div className={styles.walletSection}>
          <h2 className={styles.sectionTitle}>Smart Tutor Wallet</h2>

          <div className={styles.incomeStats}>
            <div className={styles.incomePeriod}>
              <span>Daily</span>
              <h3>Rs. 5,000</h3>
            </div>
            <div className={styles.incomePeriod}>
              <span>Weekly</span>
              <h3>Rs. 34,000</h3>
            </div>
            <div className={styles.incomePeriod}>
              <span>Monthly</span>
              <h3>Rs. 100,000</h3>
            </div>
          </div>

          <div className={styles.paymentMethods}>
            <div className={styles.paymentCard}>
              <BanknoteIcon className={styles.icon} />
              <span>Payment via Bank Transfer</span>
              <h4>Rs. 75,000</h4>
            </div>
            <div className={styles.paymentCard}>
              <CoinsIcon className={styles.icon} />
              <span>Payment via Cash</span>
              <h4>Rs. 25,000</h4>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          {/* Completed Payments Card */}
          <div className={styles.completedCard}>
            <div className={styles.completedContent}>
              <span>Payments for January 2023</span>
              <h2>Completed</h2>
              <div className={styles.progressRing}>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Latest Transactions Section */}
          <div className={styles.transactionsSection}>
            <div className={styles.transactionsHeader}>
              <h2>Latest transactions</h2>
              <div className={styles.periodSelector}>
                <span>Last Month</span>
                <ChevronDown size={16} />
              </div>
            </div>

            <div className={styles.transactionsList}>
              {transactions.map((transaction, index) => (
                <div key={index} className={styles.transactionItem}>
                  <div className={styles.transactionDate}>
                    {transaction.date}
                  </div>
                  <div className={styles.transactionName}>
                    {transaction.name}
                  </div>
                  <div className={styles.transactionType}>
                    {transaction.type}
                  </div>
                  <div className={styles.transactionAmount}>
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.seeMoreButton}>See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPayments;
