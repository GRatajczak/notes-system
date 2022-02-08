import styled from "styled-components";
import Title from 'components/atoms/Title/Title';
import SubtitleUser from "components/atoms/SubtitleUser/SubtitleUser";


export const StyledWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 10px;
    padding: 30px 25px;
    ${Title}{
        display: block;
        margin-bottom: 0px !important;
    }
    ${SubtitleUser}{
        display: block;
        margin-top: 5px !important;
        margin-bottom: 20px !important;
    }
`;

export const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    img {
        object-fit: cover;
        width: 40%;
        display: block;

    }
`;