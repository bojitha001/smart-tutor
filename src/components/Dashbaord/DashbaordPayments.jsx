import React, { useEffect, useState } from "react";
import { Bell, settings, LogOut } from 'lucide-react';
import dashboardClasses from "../DashboardClasses";

function Payments() {
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
        
    
        <main className="main-content">

            <header className="header">
                <div className="search-bar">
                    <input type="text" placeholder="search here for payments..." />
                </div>
            
            
            // account details
            
            
            </header>

            {/* wallet section */}
            <section className="wallet-section">
                <h2 className="walltet-header">Smart Tutor Wallet</h2>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="state-label">Daily</div>
                        <div className="stat-value">Rs. 5,000</div>
                    </div>
                    <div className="stat-card">
                        <div className="state-label">Weekly</div>
                        <div className="stat-value">Rs. 34,000</div>
                    </div>
                    <div className="stat-card">
                        <div className="state-label">Monthly</div>
                        <div className="stat-value">Rs. 100,000</div>
                    </div>
                </div>

                <div className="payment-method">
                    <div className="payment-card">
                        <h3>Payment via Bank Transfer</h3>
                        <p>Rs. 75,000</p>
                    </div>
                    <div className="payment-card">
                        <h3>Payment via Cash</h3>
                        <p>Rs. 25,000</p>
                    </div>
                </div>
            </section>

            {/* Transactions Section */}
            <section className="transactions-section">
                <div className="completion-card">
                    <h3>Payments for January 2023</h3>
                    <div className="completion-circle-container">
                        <svg className="progress-ring" width="120" height="120">
                            <circle
                                className="progress-ring__circle-bg"
                                stroke="#e6e6e6"
                                strokeWidth="10"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                            />
                            <circle
                                className="progress-ring__circle"
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
                                className="progress-text percentage"
                            >
                                {progress}%
                            </text>
                            <text
                                x="50%"
                                y="65%"
                                textAnchor="middle"
                                className="progress-text amount"
                            >
                                Rs. {currentAmount.toLocaleString()}
                            </text>
                        </svg>
                    </div>
                    <p>Completed</p>
                </div>

                <div className="transactions-list">
                    <div className="transactions-header">
                        <h3>Latest transactions</h3>
                        <select>
                            <option>Last Month</option>
                        </select>
                    </div>

                    <div className="transaction-rows">
                        <div className="transaction-row">
                            <span>Today</span>
                            <span>Farhan</span>
                            <span>Bank transfer</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className="transaction-row">
                            <span>20/01</span>
                            <span>Yeheni</span>
                            <span>Cash</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className="transaction-row">
                            <span>20/01</span>
                            <span>Sam</span>
                            <span>Bank transfer</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className="transaction-row">
                            <span>19/01</span>
                            <span>Manlika</span>
                            <span>Bank transfer</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                        <div className="transaction-row">
                            <span>19/01</span>
                            <span>Garuka</span>
                            <span>Cash</span>
                            <span>Rs. 2,500.00</span>
                        </div>
                    </div>

                    <button className="see-more-btn">See more</button>
                </div>
            </section>

        </main>
    );


}

export default dashboardClasses;