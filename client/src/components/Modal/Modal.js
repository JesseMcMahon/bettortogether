import React from "react";

import "./Modal.css";

import Graph from "../Graph/Graph";

const Modal = ({ team1, team2 }) => {
  const handleClick = event => {
    event.preventDefault();
  };

  return (
    <div className="modalOverlay">
      <form>
        <div className="modal">
          <div className="modalHeader">
            <h3>Who did you bet?</h3>
          </div>
          <div className="modalBody">
            <div className="teamPickOptions">
              <div className="teamPickOption1">
                <label className="labelOption1">{team1}</label>
                <input type="checkbox" />
              </div>
              <div className="teamPickOption2">
                <label className="labelOption2">{team2}</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <button onClick={handleClick} className="teamPickButton">
            Enter Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
