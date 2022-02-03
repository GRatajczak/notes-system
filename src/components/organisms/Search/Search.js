import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import { StyledWrapper, StatusInfo } from './Search.styles';

const Search = (props) => {
    return( 
    <StyledWrapper>
        <StatusInfo>
            <p>
                Logged as:
            </p>
            <strong>
                Teacher
            </strong>
        </StatusInfo>
        <Input search placeholder='Find what you want'/>
    </StyledWrapper>
    );
};

Search.propTypes = {};

export default Search;
