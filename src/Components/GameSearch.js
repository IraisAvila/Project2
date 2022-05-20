import React, { useState } from "react";

function Gamesearch() {
    const [gamesearch, setGameSearch] = useState([]);
    const [search, setSearch] = useState("")
    const [message, setMessage] = useState("")

    const updatedSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //gamesearch.filter(game)
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '6428e89b01msh7e351de5c0bb4d1p174d95jsn4b0248274db8'
        }
    };
    if (gamesearch.length == 0 ) 
    {
        fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=92a98b10eaff486fbdc0f15ee2075e03', options)
        .then(response => response.json())
        .then(data => {
            setGameSearch(data.results)
        })
        .catch(err => console.error(err));
    }

    let searchDisplay = "";
    if (gamesearch !== null) {
      searchDisplay = (
        <div>
          {/*<h3>Name: {gamesearch.results[0].name}</h3>*/}
          <h3>Genre: </h3>
          <h3>Platforms: </h3>
          <h3>Where to buy: </h3>
          {/*<img src={gamesearch.results[0].background_image} alt={gamesearch.results[0].name}/>*/}
        </div>
      );
    }
    return (
        <div className="App">
            <h1>Game SEARCH:</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input onChange={updatedSearch} value={search} type="text" placeholder="Game Name"/>
                <input type="submit" value="Find Game Info"/>
            </form>
            <p>{message}</p>
            {searchDisplay}
        </div>
    )

}

export default Gamesearch;