import React from 'react';
import UserListItem from 'components/UserListItem/UserListItem';
import { users } from 'data/users';

const UsersList = () => (
    <div>
        <ul>
            {
                users.map(
                    (userData) => (
                        <UserListItem 
                            userData={userData}
                        />
                    )
                )
            }
        </ul>
    </div>
);

UsersList.propTypes = {};

export default UsersList;