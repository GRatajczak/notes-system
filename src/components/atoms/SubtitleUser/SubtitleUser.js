import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from 'components/atoms/SubtitleUser/SubtitleUser.styles';

const SubtitleUser = ({percent}) => {
    return (
        <StyledSubtitle>
            {`attendance: ${percent}%`}
        </StyledSubtitle>
    );
};


SubtitleUser.propTypes = {
    percent: PropTypes.string
};


export default SubtitleUser;