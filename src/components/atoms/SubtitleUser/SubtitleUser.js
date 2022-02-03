import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from 'components/atoms/SubtitleUser/SubtitleUser.styles';

const SubtitleUser = ({text}) => {
    return (
        <StyledSubtitle>
            {text}
        </StyledSubtitle>
    );
};


SubtitleUser.propTypes = {
    text: PropTypes.string
};


export default SubtitleUser;