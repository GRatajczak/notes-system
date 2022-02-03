import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 100%;
    max-width: 500px;
    padding: 40px 30px;
    border-radius: 30px;
    box-shadow: 0 5px 10px -5px rgba(0,0,0, .3);
`;

export const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`;