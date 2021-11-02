import React from 'react';

import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form'


const Root = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-user">Add user</Link>
        </nav>
        <GlobalStyles />
        <Switch >
          <Route path="/" exact>
            <UsersList />
          </Route>
          <Route path="/add-user">
            <h1>test</h1>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
