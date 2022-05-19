//Navigation bar links & more//
import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { Route, Routes } from "react-router";
import { FaGamepad } from "react-icons/fa";
import Game from "./Home.js";
import Gamelist from "./GameList.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>
            <FaGamepad size={45} />
          </h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/gamelist">Game List</NavLink>
          <NavLink to="/gamelist">Game Search</NavLink>
          <NavLink to="/gamelist">Game Wish List</NavLink>
        </NavMenu>
        {/* <NavBtn>
                <NavBtnLink to="/signin">sign in</NavBtnLink>
            </NavBtn> */}
      </Nav>
      <main>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/gamelist" element={<Gamelist />} />
        </Routes>
      </main>
    </>
  );
};

export default Navbar;
