import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React from 'react'
import { StyledNav, StyledLogoWrapper } from './Nav.style';


const Nav = () => {

    return(
        <StyledNav>
            <StyledLogoWrapper>
                Note system
            </StyledLogoWrapper>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
        </StyledNav>
    );
}


export default Nav;