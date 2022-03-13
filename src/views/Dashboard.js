import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import Title from 'components/atoms/Title/Title';
import styled from 'styled-components';
import { useModal } from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  ${Title} {
    margin-right: 15px;
  }
  a {
    text-decoration: none;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const { handleCloseModal, handleOpenModal, modalState } = useModal();
  const { id } = useParams();

  const handleOpenStudentDetails = (id) => {
    console.log(id);
    setCurrentUser();
    handleOpenModal();
  };

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <>
      <>
        <StyledNav>
          <Title>Groups: </Title>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </StyledNav>
        <UsersList
          handleOpenStudentDetails={handleOpenStudentDetails}
          users={students}
        />
        {modalState && (
          <Modal isOpen={modalState} handleClose={handleCloseModal}>
            {currentUser}
          </Modal>
        )}
      </>
    </>
  );
};

export default Dashboard;
