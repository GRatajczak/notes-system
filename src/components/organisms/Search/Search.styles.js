import { Input } from "components/atoms/Input/Input";
import styled from "styled-components";

export const StyledWrapper = styled.div`
    padding: 20px 30px 20px;
    border-bottom: 1px solid ${({theme}) => theme.colors.grey};
    display: flex;
    justify-content: start;

    ${Input}{
        font-size: 18px;
        width: 100%;
        max-width: 350px;
        border: none;
        box-shadow: 0 0 10px ${({theme}) => theme.colors.grey};
    }
`;

export const StatusInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;