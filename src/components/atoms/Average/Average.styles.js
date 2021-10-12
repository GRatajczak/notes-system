import styled from 'styled-components';

const avgRange = (avg) => {
    let color = '';
    if(avg < 3){
        color = '#CB8581';
    }else if(avg >= 3 && avg < 5){
        color =  '#E1D888';
    }else if(avg >= 5){
        color = '#8FCB81';
    }
    return color;
} 

export const StyledAverage = styled.div`
    width: 34px;
    height: 34px;
    margin-right: ${({marginRight}) => marginRight || '0'};
    font-weight: 700;
    background-color:  ${({number}) => avgRange(number)};
    border-radius: 50%;
    display: flex;
    font-size: ${({theme}) => theme.fontSize.m};
    color: ${({theme}) => theme.colors.white};
    align-items: center;
    justify-content: center;
`;