import styled from 'styled-components';

export const StyledListElement = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    padding: 12px 10px;
    justify-content: flex-start;
    &:not(:last-child)::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgray;
    }
`;

export const StyledButtonWrapper = styled.li`
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
`;
