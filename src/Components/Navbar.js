//Navigation bar links & more//
import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { Route, Routes } from "react-router";
import { FaGamepad } from "react-icons/fa";
import Game from "./Home.js";
import Gamelist from "./GameList.js";
import GameSearch from "./GameSearch";
import WishList from "./Components/WishList";

const Navbar = ({toggle}) => {
  return (
    <>
    
      <Nav>
        <NavLink to="/">
          <h1>
            <FaGamepad size={45} />
          </h1>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to="/gamelist">Game List</NavLink>
          <NavLink to="/gamesearch">Game Search</NavLink>
          <NavLink to="/wishlist">Game Wish List</NavLink>
        </NavMenu>
      </Nav>
      <main>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/gamelist" element={<Gamelist />} />
          <Route path="/gamesearch" element={<GameSearch />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </main>
    </>
  );
};

export default Navbar;
