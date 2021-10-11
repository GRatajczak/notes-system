import React from 'react';
import UsersList from 'components/molecules/UsersList/UsersList';
import { GlobalStyles } from 'assets/styles/globalStyles';
const Root = () => {
  return (
    <>
      <GlobalStyles />
      <UsersList />
    </>
  );
}

export default Root;
