import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './Card.styles';
import Title from 'components/atoms/Title/Title';
import SubtitleUser from 'components/atoms/SubtitleUser/SubtitleUser';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Card = ({title, subtitle, text, img, buttonText}) => {
    return (
        <StyledWrapper>
            <Title title={title} />
            <SubtitleUser text={subtitle} />
            <Paragraph>{text}</Paragraph>
            <Button>{buttonText}</Button>
        </StyledWrapper>
    );
};

Card.propTypes = {


};

export default Card;
