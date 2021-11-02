import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${({isSecondary}) => isSecondary ? '#e7e044' : '#c0c7d6'};
    border-radius: ${({borderRadius}) =>  borderRadius || '50%'};
    color: white; 
    border: none;
    cursor: pointer;
    margin-left: 8px;
`;