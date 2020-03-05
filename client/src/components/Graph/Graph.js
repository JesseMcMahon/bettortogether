import React from "react";
import Chat from "../Chat/Chat";

import "./Graph.css";
import Modal from "../Modal/Modal";

const Graph = ({ room }) => {
  const teams = room.split("vs");
  const team1 = teams[0].trim();
  const team2 = teams[1];

  return (
    <div className="graphContainer">
      <div className="graphHeader">
        <h2>Betting side %</h2>
        <hr className="mt0" />
      </div>
      <div className="graphSection">
        <div className="team1Bar">
          <svg width="20%" height="50%">
            <rect className="rect1" />
          </svg>
        </div>
        <div className="team2Bar">
          <svg width="20%" height="50%">
            <rect className="rect2" />
          </svg>
        </div>
      </div>
      <div className="teamLabels">
        <hr />
        <h3 className="graphTeam1">{team1}</h3>
        <h3 className="graphTeam2">{team2}</h3>
      </div>
      {/* <Modal id="modal" team1={team1} team2={team2} /> */}
    </div>
  );
};

export default Graph;
