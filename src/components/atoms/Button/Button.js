import styled from 'styled-components'


const Button = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    border: 0;
    background-color:${({theme}) => theme.colors.lightGrey};
    font-size: ${({theme}) => theme.fontSize.m};
    color: ${({theme}) => theme.colors.darkGrey};
    cursor: pointer;
    display: block;
`;

export default Button;