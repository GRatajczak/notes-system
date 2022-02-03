import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './News.styles';
import Title from 'components/atoms/Title/Title';
import Card from 'components/molecules/Card/Card';

const News = () => {
    return (
        <StyledWrapper>
            <Title title="News feed section" />
            <Card 
                title="New computers for all lecturers" 
                buttonText="Read more"
                text="Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit quis egestas eget at magna ac commodo volutpat."
                subtitle="Staff news"

            />
        </StyledWrapper>
    );
};

News.propTypes = {};

export default News;
