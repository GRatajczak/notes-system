import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UsersList />
    </ThemeProvider>
  );
}

export default Root;
