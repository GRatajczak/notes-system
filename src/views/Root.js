import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useForm } from 'react-hook-form';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from 'components/organisms/Nav/Nav';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from 'providers/UserProvider';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import Notes from './Notes';

const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 30px 0 99px;
  justify-content: center;
  position: relative;
  height: 100vh;
  form {
    width: 50%;
  }
`;

const AnthenticatedRoute = () => (
  <>
    <Nav />
    <Switch>
      <UsersProvider>
        <Route path="/" exact>
          <Redirect to="/group" />
        </Route>
        <Route path="/group/:id?">
          <Dashboard />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
      </UsersProvider>
    </Switch>
  </>
);

const UnanthenticatedRoute = ({ handleSignIn }) => {
  const onSubmit = ({ login, password }) => handleSignIn({ login, password });

  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label={'login'}
        name={'login'}
        id={'login'}
        {...register('login')}
      />
      <FormField
        label={'password'}
        name={'password'}
        id={'password'}
        type={'password'}
        {...register('password')}
      />
      <Button type="submit">Sign up</Button>
    </form>
  );
};

const Root = () => {
  const [user, setUser] = useState(null);
  const { error, dispatchError } = useError();
  const handleSignIn = async ({ login, password }) => {
    try {
      const data = await axios.post('/login', {
        login,
        password,
      });
      setUser(data.data);
    } catch (err) {
      dispatchError();
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledMainContainer>
          {user ? (
            <AnthenticatedRoute />
          ) : (
            <UnanthenticatedRoute handleSignIn={handleSignIn} />
          )}
          {error ? <ErrorMessage /> : null}
        </StyledMainContainer>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
