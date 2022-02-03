import React from 'react'
import PropTypes from 'prop-types'
import {StyledTitle } from 'components/atoms/Title/Title.styles';

const TitleUser = ({title}) => {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    )
}

TitleUser.propTypes = {
    title: PropTypes.string
}

export default TitleUser

