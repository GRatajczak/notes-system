import { render } from 'test-utils';
import Search from './Search';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';

describe('Search Bar', () => {
  it('Render the component', () => {
    render(<Search />);
  });
});
