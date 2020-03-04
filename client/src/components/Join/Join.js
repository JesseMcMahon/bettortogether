import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Join.css";

const apiKey = "99c6825e69439d43aa6e980669728613";

const Join = () => {
  const allGames = [];

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeRoom = event => {
    setRoom(event.target.value);
  };

  const handleChangeLeague = event => {
    const league = event.target.value;

    axios
      .get(
        `https://api.the-odds-api.com/v3/odds/?apiKey=${apiKey}&sport=${league}&region=us&mkt=spreads`
      )
      .then(res => {
        const matchups = res.data.data;

        console.log(res);

        for (let i = 0; i < matchups.length; i++) {
          const option = document.createElement("OPTION");
          allGames.push(`${matchups[i].teams[0]} vs ${matchups[i].teams[1]}`);

          option.value = allGames[i];
          document.querySelector("#gamePicker").appendChild(option);
          option.innerHTML = option.value;
        }
      });

    console.log(allGames);
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Bettor Together</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={handleChangeName}
          />
        </div>
        <div>
          <select className="joinInput mt-20" onChange={handleChangeLeague}>
            <option value="default" defaultValue>
              Choose your league...
            </option>
            <option value="basketball_nba">NBA</option>
            <option value="NFL">NFL</option>
            <option value="hockey_nhl">NHL</option>
            <option value="baseball_mlb">MLB</option>
          </select>
        </div>
        <div>
          <select
            className="joinInput mt-20"
            id="gamePicker"
            onChange={handleChangeRoom}
          >
            <option>League games today</option>
          </select>
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Win Money. Have Fun.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
