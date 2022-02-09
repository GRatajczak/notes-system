import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { StyledWrapper } from './News.styles';
import Title from 'components/atoms/Title/Title';
import Card from 'components/molecules/Card/Card';


const API_TOKEN = '5be833e8893421519aab22d60ba27c';

const News = () => {

    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.post(`https://graphql.datocms.com/`, 
        {
            query: `{
                allArticles {
                    id
                    title
                    category
                    _status
                    _firstPublishedAt
                    content
                }
            }`
        }, 
        {
            headers: {
                authorization: `Bearer ${API_TOKEN}`
            }
        })
        .then(
            ({data}) => setArticles(data.data.allArticles)
        )
        .catch(() => setError(true))
    }, [])


    return (
        <StyledWrapper>
            <Title>News feed section</Title>
            {
                error ? 
                'Sorry somethink went wrong' : 
                articles.length > 0 ? articles.map(el => {
                    return(
                        <Card 
                            key={el.id}
                            title={el.title}
                            buttonText="Read more"
                            text={el.content}
                            subtitle={el.category}
                        />
                    )
                }) : "Loading..."
            }
        
        </StyledWrapper>
    );
};


export default News;
