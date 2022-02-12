import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUsers = ({ groupId = '' } = {}) => {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  const getGroups = async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  };
  const getStudents = async () => {
    try {
      const result = await axios.get(`/students/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  };

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getGroups,
    getStudents,
    findStudents,
  };
};
