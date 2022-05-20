import React, { useState } from "react";

function Gamesearch() {
  const [gamesearch, setGameSearch] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [gamesearch3, setGameSearch3] = useState(null);

  const updatedSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const gamesearch2 = gamesearch.filter((game) => game.name == search);
    setGameSearch3(gamesearch2[0]);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "6428e89b01msh7e351de5c0bb4d1p174d95jsn4b0248274db8",
    },
  };
  if (gamesearch.length == 0) {
    fetch(
      "https://rawg-video-games-database.p.rapidapi.com/games?key=92a98b10eaff486fbdc0f15ee2075e03",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setGameSearch(data.results);
      })
      .catch((err) => console.error(err));
  }

  let searchDisplay = "";
  if (gamesearch3 !== null) {
    const genres = gamesearch3.genres.map((genre) => genre.name + "︱ ");
    const platforms = gamesearch3.parent_platforms.map(
      (platform) => platform.platform.name + "︱ "
    );
    const stores = gamesearch3.stores.map((store) => store.store.name + "︱ ");

    searchDisplay = (
      <div>
        <h3>Name: {gamesearch3.name}</h3>
        <h3>Genre: {genres}</h3>
        <h3>Platforms: {platforms}</h3>
        <h3>Where to buy: {stores} </h3>
        <img src={gamesearch3.background_image} alt={gamesearch3.name} />
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Game Search:</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={updatedSearch}
          value={search}
          type="text"
          placeholder="Game Name"
        />
        <input type="submit" value="Find Info" />
      </form>
      <p>{message}</p>
      {searchDisplay}
    </div>
  );
}

export default Gamesearch;
