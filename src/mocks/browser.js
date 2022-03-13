import { setupWorker } from 'msw';
import { handlers } from 'mocks/handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

const createUsers = () => {
  for (let index = 0; index < 12; index++) {
    db.student.create();
  }
  db.teacher.create();
};

createUsers();

window.mocks = {
  createUsers,
  getUsers: () => db.student.getAll(),
};
