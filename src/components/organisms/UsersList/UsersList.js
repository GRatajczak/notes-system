import React, {useState, useEffect } from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledWrapper } from './UsersList.styles';
import PropTypes, {UserShape} from 'prop-types'

const UsersList = ({ users }) => {

        return(
                <StyledWrapper>
                    <ul>
                        {
                            users.map(
                                (userData, index) => (
                                    <UserListItem 
                                        key={userData.name}
                                        userData={userData}
                                    />
                                )
                            )
                        }
                    </ul>
                </StyledWrapper>
        )
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    deleteUser: PropTypes.func,
};

export default UsersList;