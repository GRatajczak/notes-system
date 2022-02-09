import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, FlexWrapper } from './Card.styles';
import Title from 'components/atoms/Title/Title';
import SubtitleUser from 'components/atoms/SubtitleUser/SubtitleUser';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Card = ({title, subtitle, text, img, buttonText}) => {
    return (
        <StyledWrapper>
            <Title>{title}</Title>
            <SubtitleUser>
                {subtitle}
            </SubtitleUser>
            <FlexWrapper>
                <Paragraph>{text}</Paragraph>
                { img && <img src={img} alt="obrazek"/> }
            </FlexWrapper>
            <Button>{buttonText}</Button>
        </StyledWrapper>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    buttonText: PropTypes.string,
};

export default Card;
