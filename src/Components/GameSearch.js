import React, { useState } from "react";

function Gamesearch() {
    const [gamesearch, setGameSearch] = useState([]);
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
            setGameSearch(data.results);
        })
        .catch(err => console.error(err));
    }


    return (
        <div>
            <h1>Game Search Page</h1>
            <ul>
                {gamesearch.map(game => {
                    return (
                        <li key={game.name}>{game.name}</li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Gamesearch;