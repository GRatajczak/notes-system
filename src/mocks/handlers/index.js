import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';
import { db } from 'mocks/db';

const authenticateRequest = (req) => {
  const token = localStorage.getItem('__be_token__') || null;
  const userToken = req.headers.get('Authorization')?.replace('Bearer ', '');

  return token === userToken;
};

const sanitizeUser = (user) => {
  const { password, ...rest } = user;
  return rest;
};

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = req.body.searchPhrase
      ? students.filter((student) =>
          student.name
            .toLowerCase()
            .includes(req.body.searchPhrase.toLowerCase())
        )
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.group
      );
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
  rest.post('/login', (req, res, ctx) => {
    const user = db.teacher.findFirst({
      where: {
        login: {
          equals: req.body.login,
        },
      },
    });
    if (user && user.password === req.body.password) {
      const token = btoa(user.login);
      localStorage.setItem('__be_token__', token);
      return res(ctx.status(200), ctx.json({ ...sanitizeUser(user), token }));
    }
    return res(
      ctx.status(403),
      ctx.json({
        error: 'Invalid user data',
      })
    );
  }),
  rest.get('/me', (req, res, ctx) => {
    if (authenticateRequest(req)) {
      const user = db.teacher.getAll();
      return res(ctx.status(200), ctx.json({ ...sanitizeUser(user) }));
    }
    return res(ctx.status(401));
  }),
];
