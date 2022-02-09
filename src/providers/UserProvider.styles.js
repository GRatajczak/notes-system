import styled from 'styled-components';

export const StyledFlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
`;

export const StyledChildrenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    & > div {
        margin: 30px auto;
        height: 100%;
    }
`;

export const StyledSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    border-left: 1px solid ${({theme}) => theme.colors.grey};
    padding: 10px 30px;
    height: 100%;
`;