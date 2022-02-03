import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import Search from 'components/organisms/Search/Search';
import styled from 'styled-components';
import News from 'components/templates/News/News';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const StyledFlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
`;

const StyledChildrenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    & > div {
      margin: 30px auto;
      height: 100%;
    }
`;

const StyledSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    border-left: 1px solid ${({theme}) => theme.colors.grey};
    padding: 10px 30px;
    height: 100%;
`;

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

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
        <StyledChildrenWrapper>
          {children}
        </StyledChildrenWrapper>
      </StyledFlexWrapper>
      <StyledSideWrapper>
        <News />
      </StyledSideWrapper>
    </UsersContext.Provider>
  );
};

export default UsersProvider;