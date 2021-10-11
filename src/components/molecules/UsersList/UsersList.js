import React from 'react';
import UserListItem from 'components/organisms/UserListItem/UserListItem';
import { users } from 'data/users';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 40px 30px;
    border-radius: 30px;
    box-shadow: 0 5px 10px -5px rgba(0,0,0, .3);
`;

const UsersList = () => (
    <Wrapper>
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
    </Wrapper>
);

UsersList.propTypes = {};

export default UsersList;