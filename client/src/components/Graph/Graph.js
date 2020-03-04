import React from "react";
import Chat from "../Chat/Chat";

import "./Graph.css";

const Graph = ({ room }) => {
  const teams = room.split("vs");
  const team1 = teams[0].trim();

  const team2 = teams[1];

  return (
    <div className="graphContainer">
      <h2>Betting side %</h2>
      <hr />
      <div className="teamLabels">
        <hr />
        <h3 className="graphTeam1">{team1}</h3>
        <h3 className="graphTeam2">{team2}</h3>
      </div>
    </div>
  );
};

export default Graph;
