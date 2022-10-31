import { useEffect, useState } from "react";
import { PlayerDetailsInterface } from "./App";
import "./main.css";
import Moment from "moment";
import { getGameDetails } from "./Request";

function AppHistory() {
  const [history, setHistory] = useState<PlayerDetailsInterface[]>([]);

  useEffect(() => {
    getGameDetails().then((data) => setHistory(data));
  }, []);
    
  return (
    <div style={{ backgroundColor: "white", height: "600px" }}>
      <h3 style={{ padding: "10px", textAlign: "center" }}>App History</h3>

      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Game</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Limit</th>
            <th>Speed</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.player}</td>
              <td>{item.game}</td>
              <td>
                {Moment(item.beginTime).format("MMMM Do YYYY, h:mm:ss a")}
              </td>
              <td>{Moment(item.endTime).format("MMMM Do YYYY, h:mm:ss a")}</td>
              <td>{item.limit}</td>
              <td>{item.speed}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppHistory;
