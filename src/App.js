import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
