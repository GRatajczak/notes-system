
import styled from 'styled-components'

export const StyledSubtitle = styled.p`
    font-weight: 400;
    line-height: 14px;
    color: ${({theme}) => theme.colors.grey};
    font-size: ${({theme}) => theme.fontSize.s};
`;
