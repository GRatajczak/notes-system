import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100vh;
    width: 100px;
    left: 0%;
    top: 0;
    border-right: 1px solid #DFE2E8;
`;

export const StyledLogoWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #737C8E;
    text-align: right;
    padding: 13px 20px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    a{
        font-size: 12px;
        line-height: 16px;
        color:  #737C8E;
        font-weight: 400;
    }
`;