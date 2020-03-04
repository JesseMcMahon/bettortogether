import React from "react";

import "./Graph.css";

const Graph = () => {
  return (
    <div className="graphContainer">
      <h2>Betting side %</h2>
      <hr />
      <div className="teamLabels">
        <hr />
        <h3 className="graphTeam1">Team 1</h3>
        <h3 className="graphTeam2">Team 2</h3>
      </div>
    </div>
  );
};

export default Graph;
