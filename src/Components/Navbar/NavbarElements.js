import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

export const Navbar = styled.nav`
    background: red;
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link) `
    color: red;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
 

    &.active{
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.75rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    background: pink;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 24px;
    

    @media screen and (max-width: 760px) {
        display: block;
    }
`


export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    color:#fff;
    padding: 10px 22px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`