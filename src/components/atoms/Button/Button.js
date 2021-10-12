
import React from 'react';
import PropTypes from 'prop-types'
import { StyledButton } from './Buttons.styles';

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
