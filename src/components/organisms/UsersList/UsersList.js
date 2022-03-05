import React from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledWrapper } from './UsersList.styles';
import PropTypes, { UserShape } from 'prop-types';

const UsersList = ({ users, handleOpenStudentDetails }) => {
  return (
    <StyledWrapper>
      <ul>
        {users.map((userData, index) => (
          <UserListItem
            onClick={handleOpenStudentDetails}
            key={index}
            userData={userData}
          />
        ))}
      </ul>
    </StyledWrapper>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
