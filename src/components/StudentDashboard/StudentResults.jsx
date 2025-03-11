// function Results() {
//     return (
//       <div className="results-page">
//       <h1>Results</h1>
//       </div>
//     );
//   }
  
//   export default Results;


  import React from 'react';
  import { BarChart, Download } from 'lucide-react';
  import styles from '../../.ExternalCss/StudentResults.module.css';
  
  const Results = () => {
    const testData = {
      subject: "Physics - Test 04",
      grade: "A+",
      percentage: "82%",
      rank: "5",
      lastUpdated: "February 28, 2025"
    };
  
    const chartData = [
      { test: "Test 01", studentAvg: 80, thevinu: 60 },
      { test: "Test 02", studentAvg: 90, thevinu: 88 },
      { test: "Test 03", studentAvg: 60, thevinu: 92 },
      { test: "Test 04", studentAvg: 75, thevinu: 82 }
    ];
  
    const handleDownloadReport = () => {
      // Implement download functionality here
      console.log("Downloading report...");
    };
  
    return (
      <div className={styles.container}>
        {/* Recent Test Results */}
        <div className={styles.resultsContainer}>
          
          <div className={styles.recentResults}>
            <h2>Recent Test Results</h2>
            <div className={styles.resultCard}>
              <h3>{testData.subject}</h3>
              <div className={styles.gradeInfo}>
                <span className={styles.grade}>{testData.grade}</span>
                <span className={styles.percentage}>{testData.percentage}</span>
              </div>
              <div className={styles.rank}>Rank - {testData.rank}</div>
              <div className={styles.lastUpdated}>Last Updated: {testData.lastUpdated}</div>
            </div>
          </div>
  
       
        </div>
      </div>
    );
  };
  
  export default Results;  