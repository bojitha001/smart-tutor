import styles from '../../.ExternalCss/StudentResults.module.css';
  import React, { useState } from 'react';
  // import { BarChart, Download } from 'lucide-react';
  import { BarChart as BarChartIcon, Download } from 'lucide-react';

  import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  
  const StudentResults = () => {
    const [timeframe, setTimeframe] = useState('Week');
    
    const testData = {
      labels: ['Test 01', 'Test 02', 'Test 03', 'Test 04'],
      studentAvg: [80, 90, 60, 75],
      thevinu: [60, 88, 92, 82]
    };
  
    const handleDownloadReport = () => {
      // Handle report download logic here
      console.log('Downloading report...');
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.resultsGrid}>
          {/* Recent Test Results */}
          <div className={styles.recentResults}>
            <h2>Recent Test Results</h2>
            <div className={styles.testCard}>
              <h3>Physics - Test 04</h3>
              <div className={styles.grade}>A+</div>
              <div className={styles.percentage}>82%</div>
              <div className={styles.rank}>Rank - 5</div>
              <p className={styles.lastUpdated}>Last Updated: February 28, 2025</p>
            </div>
          </div>
  
          {/* Performance Graph */}
          <div className={styles.graphSection}>
            <div className={styles.graph}>
              {testData.labels.map((label, index) => (
                <div key={label} className={styles.barGroup}>
                  <div 
                    className={styles.studentBar} 
                    style={{ height: `${testData.studentAvg[index]}%` }}
                  />
                  <div 
                    className={styles.thevinuBar} 
                    style={{ height: `${testData.thevinu[index]}%` }}
                  />
                  <span className={styles.label}>{label}</span>
                </div>
              ))}
              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <span className={styles.studentColor}></span>
                  <span>Student's avg</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.thevinuColor}></span>
                  <span>Thevinu</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Attendance Tracker */}
          <div className={styles.attendanceCard}>
            <h3>Attendance</h3>
            <div className={styles.attendanceCircle}>
              <svg viewBox="0 0 36 36" className={styles.circularChart}>
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4c1d95"
                  strokeWidth="3"
                  strokeDasharray={`${(67 / 100) * 100}, 100`}

                />
              </svg>
              <div className={styles.percentageAttendance}>67%</div>
            </div>
            <div className={styles.attendanceDetails}>
              <p>Absent - 28 days</p>
              <p>Present - 180 days</p>
            </div>
          </div>
  
          {/* Course Hours */}
          <div className={styles.courseHours}>
            <div className={styles.courseHeader}>
              <h3>Course Hours</h3>
              <select 
                value={timeframe} 
                onChange={(e) => setTimeframe(e.target.value)}
                className={styles.timeframeSelect}
              >
                <option value="Daily">Daily</option>
                <option value="Week">Weekly</option>
                <option value="Month">Monthly</option>
              </select>
            </div>
            <div className={styles.progressCircle}>
              <svg viewBox="0 0 36 36" className={styles.circularChart}>
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#ffd700"
                  strokeWidth="3"
                  strokeDasharray="19, 100"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4834d4"
                  strokeWidth="3"
                  strokeDasharray="81, 100"
                />
              </svg>
              <div className={styles.coursePercentage}>81%</div>
            </div>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={styles.pendingColor}></span>
                <span>Pending</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.doneColor}></span>
                <span>Done</span>
              </div>
            </div>
          </div>
  
          {/* Feedback Report */}
          <div className={styles.feedbackReport}>
            <h3>Feedback Report</h3>
            <img 
              src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b"
              alt="Student studying"
              className={styles.feedbackImage}
            />
            <button 
              className={styles.downloadButton}
              onClick={handleDownloadReport}
            >
              <Download size={20} />
              Download Report
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default StudentResults;