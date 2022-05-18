import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';


function App() {

  { 
   

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '6428e89b01msh7e351de5c0bb4d1p174d95jsn4b0248274db8'
      }
    };
    
    fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=92a98b10eaff486fbdc0f15ee2075e03', options)
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0])

      })
      .catch(err => console.error(err));
    }


  return (
    <div className="App">
    <Router>
      <Navbar />
    </Router>
      <h1>Video Game Info</h1>
    </div>
  );
}

export default App;
