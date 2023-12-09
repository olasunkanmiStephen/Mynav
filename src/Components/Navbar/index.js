import React from 'react'
// import { NavLink } from 'react-router-dom';
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contsct Us
                </NavLink>
                <NavLink to="/sign-in" activeStyle>
                    Sign In
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
            </NavBtn>
        </nav>
    </>
  )
}

export default Navbar;