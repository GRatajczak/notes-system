
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${({isSecondary}) => isSecondary ? '#e7e044' : '#c0c7d6'};
    border-radius: ${({borderRadius}) =>  borderRadius || '50%'};
    color: white; 
    border: none;

`;
const Button = ({isSecondary, borderRadius}) => {
    return (
        <StyledButton 
            isSecondary={isSecondary} 
            borderRadius={borderRadius}
        >
            X
        </StyledButton>
    );
}

StyledButton.propTypes = {
    isSecondary: PropTypes.bool,
    borderRadius: PropTypes.string,
}

export default Button;
