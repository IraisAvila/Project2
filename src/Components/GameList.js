import React, { useState } from "react";

function Gamelist() {
    const [listGame, setListGame] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '6428e89b01msh7e351de5c0bb4d1p174d95jsn4b0248274db8'
        }
    };
    if (listGame.length == 0 ) 
    {
        fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=92a98b10eaff486fbdc0f15ee2075e03', options)
        .then(response => response.json())
        .then(data => {
            setListGame(data.results);
        })
        .catch(err => console.error(err));
    }


    return (
        <div>
            <h1>Game List Page</h1>
            <ul>
                {listGame.map(game => {
                    return (
                        <li key={game.name}>{game.name}</li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Gamelist;