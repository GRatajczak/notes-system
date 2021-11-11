import React from 'react';
import { GlobalStyles } from 'assets/styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from 'components/organisms/Nav/Nav';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from 'providers/UserProvider';

const StyledMainContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 160px;
    position: relative;
`

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledMainContainer>
          <Nav />
          <Switch >
            <UsersProvider>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/add-user">
                <AddUser />
              </Route>
            </UsersProvider>
          </Switch>
        </StyledMainContainer>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
