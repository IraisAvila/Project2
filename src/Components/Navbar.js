//Navigation bar links & more//
import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements.js';
const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to ="/">
                <h1><i class="fa-solid fa-gamepad fa3x"></i></h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/services">
                    Services
                </NavLink>
                <NavLink to="/contact-us">
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">sign in</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar;