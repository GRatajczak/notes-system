import React, { useState } from 'react';
import Search from 'components/organisms/Search/Search';
import News from 'components/templates/News/News';
import {
  StyledFlexWrapper,
  StyledChildrenWrapper,
  StyledSideWrapper,
} from './UserProvider.styles';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      <StyledFlexWrapper>
        <Search />
        <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
      </StyledFlexWrapper>
      <StyledSideWrapper>
        <News />
      </StyledSideWrapper>
    </UsersContext.Provider>
  );
};

export default UsersProvider;
