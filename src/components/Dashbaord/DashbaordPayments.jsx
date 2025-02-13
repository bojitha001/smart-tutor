import React, { useEffect, useState } from "react";
// import { Bell, settings, LogOut } from 'lucide-react';
import styles from "../../.ExternalCss/dashboardPayments.module.css";
import DashboardClasses from "./DashboardClasses";


function DashbaordPayments() {
    const [progress, setProgress] = useState(0);
    const totalAmount = 100000;
    const currentAmount = 100000;

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(100);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        // sidebar from garuka
        
    
        <main className={`${styles["main-content"]}`}>

            <header className={styles.header}>
                <div className={`${styles["search-bar"]}`}>
                    <input type="text" placeholder="search here for payments..." />
                </div>
            
            
        {/* account details */}
            
            
            </header>

            {/* wallet section */}
            <section className={`${styles["wallet-section"]}`}>
                <h2 className={`${styles["walltet-header"]}`}>Smart Tutor Wallet</h2>

                <div className={`${styles["stats-grid"]}`}>
                    <div className={`${styles["stat-card"]}`}>
                        <div className={`${styles["state-label"]}`}>Daily</div>
                        <div className={`${styles["stat-value"]}`}>Rs. 5,000</div>
                    </div>
                    <div className={`${styles["stat-card"]}`}>
                        <div className={`${styles["state-label"]}`}>Weekly</div>
                        <div className={`${styles["stat-value"]}`}>Rs. 34,000</div>
                    </div>
                    <div className={`${styles["stat-card"]}`}>
                        <div className={`${styles["state-label"]}`}>Monthly</div>
                        <div className={`${styles["stat-value"]}`}>Rs. 100,000</div>
                    </div>
                </div>

                <div className={`${styles["payment-method"]}`}>
                    <div className={`${styles["payment-card"]}`}>
                        <h3>Payment via Bank Transfer</h3>
                        <p>Rs. 75,000</p>
                    </div>
                    <div className={`${styles["payment-card"]}`}>
                        <h3>Payment via Cash</h3>
                        <p>Rs. 25,000</p>
                    </div>
                </div>
            </section>

            {/* Transactions Section */}
            <section className={`${styles["transactions-section"]}`}>
                <div className={`${styles["completion-card"]}`}>
                    <h3>Payments for January 2023</h3>
                    <div className={`${styles["completion-circle-container"]}`}>
                        <svg className={`${styles["completion-circle-container"]}`} width="120" height="120">
                            <circle
                                className={`${styles["progress-ring__circle-bg"]}`}
                                stroke="#e6e6e6"
                                strokeWidth="10"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                            />
                            <circle
                                className={`${styles["progress-ring__circle"]}`}
                                stroke="#ffa500"
                                strokeWidth="10"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                                style={{
                                    strokeDasharray: `${2 * Math.PI * 52}`,
                                    strokeDashoffset: `${2 * Math.PI * 52 * (1 - progress / 100)}`,
                                }}
                            />
                            <text
                                x="50%"
                                y="45%"
                                textAnchor="middle"
                                className={`${styles["progress-text percentage"]}`}
                            >
                                {progress}%
                            </text>
                            <text
                                x="50%"
                                y="65%"
                                textAnchor="middle"
                                className={`${styles["progress-text amount"]}`}
                            >
                                Rs. {currentAmount.toLocaleString()}
                            </text>
                        </svg>
                    </div>
                    <p>Completed</p>
                </div>

                <div className={`${styles["progress-text amount"]}`}>
                    <div className={`${styles["transactions-header"]}`}>
                        <h3>Latest transactions</h3>
                        <select>
                            <option>Last Month</option>
                        </select>
                    </div>

                    <div className={`${styles["transaction-rows"]}`}>
                        <div className={`${styles["transaction-row"]}`}>
                            <span>Today</span>
                            <span>Farhan</span>
                            <span>Bank transfer</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className={`${styles["transaction-row"]}`}>
                            <span>20/01</span>
                            <span>Yeheni</span>
                            <span>Cash</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className={`${styles["transaction-row"]}`}>
                            <span>20/01</span>
                            <span>Sam</span>
                            <span>Bank transfer</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className={`${styles["transaction-row"]}`}>
                            <span>19/01</span>
                            <span>Manlika</span>
                            <span>Bank transfer</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className={`${styles["transaction-row"]}`}>
                            <span>19/01</span>
                            <span>Garuka</span>
                            <span>Cash</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                    </div>

                    <button className={`${styles["see-more-btn"]}`}>See more</button>
                </div>
            </section>

        </main>
    );


}


export default DashboardClasses;

