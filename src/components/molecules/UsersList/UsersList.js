import React from 'react';
import UserListItem from 'components/organisms/UserListItem/UserListItem';
import { users } from 'data/users';
import { StyledWrapper } from './UsersList.styles';


const UsersList = () => (
    <StyledWrapper>
        <ul>
            {
                users.map(
                    (userData, index) => (
                        <UserListItem 
                            key={index}
                            userData={userData}
                        />
                    )
                )
            }
        </ul>
    </StyledWrapper>
);

UsersList.propTypes = {};

export default UsersList;