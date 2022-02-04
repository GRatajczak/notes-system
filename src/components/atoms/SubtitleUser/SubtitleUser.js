import styled from 'styled-components'


 const SubtitleUser = styled.p`
    font-weight: 400;
    line-height: 14px;
    color: ${({theme}) => theme.colors.grey};
    font-size: ${({theme}) => theme.fontSize.s};
`;


export default SubtitleUser;