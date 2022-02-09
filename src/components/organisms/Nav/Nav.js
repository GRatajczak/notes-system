import {  NavLink } from 'react-router-dom'
import React from 'react'
import { StyledNav, StyledLogoWrapper } from './Nav.style';


const Nav = () => {

    return(
        <StyledNav>
            <StyledLogoWrapper>
                Note system
            </StyledLogoWrapper>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/add-user">Add user</NavLink>
        </StyledNav>
    );
}


export default Nav;