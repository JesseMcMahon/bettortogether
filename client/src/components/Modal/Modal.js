import React from "react";

import "./Modal.css";

import Graph from "../Graph/Graph";

const Modal = ({ team1, team2 }) => {
  const handleClick = event => {
    event.preventDefault();

    const chosenTeam = event.target.value;
    console.log(chosenTeam.trim());

    document.getElementById("modal").style.display = "none";
  };

  return (
    <div className="modalOverlay">
      <form>
        <div className="modal">
          <div className="modalHeader">
            <h3>Who are we rooting for?</h3>
          </div>
          <div className="modalBody">
            <div className="teamPickOptions">
              <div className="teamPickOption1">
                <button
                  onClick={handleClick}
                  value={team1}
                  className="teamPickButton"
                >
                  {team1}
                </button>
              </div>
              <div className="teamPickOption2">
                <button
                  onClick={handleClick}
                  value={team2}
                  className="teamPickButton"
                >
                  {team2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
