import React from 'react';
import PropTypes from 'prop-types'
import { StyledAverage } from './Average.styles';




const Average = ({number, marginRight}) => {
    return (
        <StyledAverage marginRight={marginRight} number={number}>
            {number}
        </StyledAverage>
    );
}
Average.propTypes = {
    number: PropTypes.number,
    marginRight: PropTypes.string
}


export default Average;
