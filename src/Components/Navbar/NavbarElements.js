import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import{FaBars} from 'react-icon/fa'

export const Nav = styled.Nav`
    background: #000;
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled