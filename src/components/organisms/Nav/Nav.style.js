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
    text-align: right;
    a{
        font-size: 12px;
        line-height: 16px;
        color:  #737C8E;
        font-weight: 700;
        text-decoration: none;
        margin-right: 24px;
        display: block;
        margin-bottom: 14px;
        position: relative;
        &:after{
            transition: transform .3s , opacity .3s;
            content: '';
            right: -25px;
            top: 50%;
            width: 20px;
            position: absolute;
            height: 2px;
            transform-origin: right;
            background-color: ${({ theme }) => theme.colors.darkGrey};
            transform: translateY(-50%)  scaleX(0);
        }
        &.active{
            &:after{
                transform: translateY(-50%)  scaleX(1);
            }
        }
    }
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
    margin-bottom: 47px;
`;