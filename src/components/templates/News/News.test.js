import MockAdapter  from 'axios-mock-adapter';
import axios from 'axios';
import { renderWithProvider } from 'helpers/renderWithProvider';
import News from './News';
import { screen } from '@testing-library/react';

const mock = new MockAdapter(axios)

const query = `{
    allArticles {
        id
        title
        _status
        _firstPublishedAt
        content
    }
}`;

describe ('News Section', () => {
    afterEach(() => mock.reset());

    it('Display error when the articles are not loaded correctly', async () => {
        mock.onPost('https://graphql.datocms.com/',{ query }).reply(500);
        renderWithProvider(<News />);
        await screen.findAllByText(/Sorry/)
    })
    it('Display the articles', async () => {
        mock.onPost('https://graphql.datocms.com/',{ query }).reply(200, {data:{allArticles:[{title: 'New computers for all lecturers', category: 'staff', content: 'Test test testt Test test testtTest test testtTest test testtTest test testtTest test testt'}]}});
        renderWithProvider(<News />);
        await screen.findAllByText(/New/)
    })
})