import styled from 'styled-components';

export const Title = styled.p`
    font-weight: 700;
    line-height: 23px;
    color: ${({theme}) => theme.colors.darkGrey};
    font-size: ${({theme}) => theme.fontSize.l};
`;



export default Title

