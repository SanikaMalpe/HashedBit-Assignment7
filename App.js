import React, { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>IPL Season 2022 Points</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.no}>No</th>
            <th style={styles.teamHeader}>Team</th>
            <th style={styles.col}>Matches</th>
            <th style={styles.col}>Won</th>
            <th style={styles.col}>Lost</th>
            <th style={styles.col}>Tied</th>
            <th style={styles.col}>NRR</th>
            <th style={styles.col}>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((t) => (
            <tr key={t.No}>
              <td style={styles.no}>{t.No}</td>
              <td style={styles.team}>{t.Team}</td>
              <td style={styles.col}>{t.Matches}</td>
              <td style={styles.col}>{t.Won}</td>
              <td style={styles.col}>{t.Lost}</td>
              <td style={styles.col}>{t.Tied}</td>
              <td style={styles.col}>{t.NRR}</td>
              <td style={styles.col}>{t.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    width: "80%",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Times New Roman, serif",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  no: {
    width: "80px",          
    textAlign: "center",
    paddingRight: "20px",   
  },
  teamHeader: {
    width: "150px",         
    textAlign: "left",
    paddingLeft: "25px",
  },
  team: {
    width: "150px",
    textAlign: "left",
    paddingLeft: "25px",
  },
  col: {
    width: "90px",
    textAlign: "center",
  },
};

export default App;
