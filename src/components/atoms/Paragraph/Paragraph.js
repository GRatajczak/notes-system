import styled from "styled-components";

const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.darkGrey};
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 20px;
`;

export default Paragraph;
