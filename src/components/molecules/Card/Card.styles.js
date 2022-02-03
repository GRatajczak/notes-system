import styled from "styled-components";


export const StyledWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 10px;
    padding: 30px 25px;
`;