import React from 'react';

import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyles } from 'assets/styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from 'components/organisms/Form/Form'
import Nav from 'components/organisms/Nav/Nav';


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
            <Route path="/" exact>
              <UsersList />
            </Route>
            <Route path="/add-user">
              <h1>test</h1>
            </Route>
          </Switch>
        </StyledMainContainer>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
