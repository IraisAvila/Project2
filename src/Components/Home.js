import React from "react";
import { useState } from "react";

// Main homepage code

function Game() {
  const [game, setGame] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "6428e89b01msh7e351de5c0bb4d1p174d95jsn4b0248274db8",
    },
  };
  if (game == null) {
    fetch(
      "https://rawg-video-games-database.p.rapidapi.com/games?key=92a98b10eaff486fbdc0f15ee2075e03",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setGame(data);
      })
      .catch((err) => console.error(err));
  }

  let gameDisplay = "";
  if (game !== null) {
    gameDisplay = (
      <div>
        <h3>Name: {game.results[0].name}</h3>
        <br />
        <img
          src={game.results[0].background_image}
          alt={game.results[0].name}
        />
        <br />
        <h3>Name:{game.results[1].name}</h3>
        <img
          src={game.results[1].background_image}
          alt={game.results[1].name}
        />
        <br />
        <h3>Name:{game.results[2].name}</h3>
        <img
          src={game.results[2].background_image}
          alt={game.results[2].name}
        />
        <br />
        <h3>Name:{game.results[3].name}</h3>
        <img
          src={game.results[3].background_image}
          alt={game.results[3].name}
        />
        <br />
        <h3>Name:{game.results[4].name}</h3>
        <img
          src={game.results[4].background_image}
          alt={game.results[4].name}
        />
        <br />
        <h3>Name:{game.results[5].name}</h3>
        <img
          src={game.results[5].background_image}
          alt={game.results[5].name}
        />
        <br />
        <h3>Name:{game.results[6].name}</h3>
        <img
          src={game.results[6].background_image}
          alt={game.results[6].name}
        />
        <br />
        <h3>Name:{game.results[7].name}</h3>
        <img
          src={game.results[7].background_image}
          alt={game.results[7].name}
        />
        <br />
        <h3>Name:{game.results[8].name}</h3>
        <img
          src={game.results[8].background_image}
          alt={game.results[8].name}
        />
        <br />
        <h3>Name:{game.results[9].name}</h3>
        <img
          src={game.results[9].background_image}
          alt={game.results[9].name}
        />
        <br />
        <h3>Name:{game.results[10].name}</h3>
        <img
          src={game.results[10].background_image}
          alt={game.results[10].name}
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Top Video Games</h1>
      {gameDisplay}
    </div>
  );
}

export default Game;
