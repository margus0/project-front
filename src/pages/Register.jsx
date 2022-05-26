import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import InputField from '../components/InputField/InputField';
import Container from '../components/Container/Container';
import { fetchData } from '../utils/helper';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState();
  let navigate = useNavigate();

  async function formHandler(e) {
    setError(false);
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    if (password !== rePassword) {
      setError(true);
      return setErrorText('Passwords do not match');
    }

    if (Object.values(userData).includes(undefined)) {
      setError(true);
      return setErrorText('Please fill in all fields.');
    }

    const resp = await fetchData('register', userData);

    if (resp.msg.includes('Registration successful')) {
      navigate('/login');
    }

    if (resp.msg.includes('Duplicate')) {
      setError(true);
      return setErrorText('Email address already in use');
    }
    if (resp.err[0].field === 'password') {
      setError(true);
      return setErrorText('Password is required');
    }
    if (resp.err[0].field === 'email') {
      setError(true);
      return setErrorText('Email is required');
    }
  }

  return (
    <>
      <Container title='Register' color='#000000a5'>
        {error && <span style={{ color: 'red' }}>{errorText}</span>}
        <form onSubmit={formHandler}>
          <InputField
            label='email:'
            name='email'
            type='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label='password:'
            name='pass'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            label='Re-enter password:'
            name='reapeat-password'
            type='password'
            placeholder='re-enter password'
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <Button type='submit' color='primary'>
            Register
          </Button>
        </form>
        Already have an account? <Link to='/login'>Login</Link>
      </Container>
    </>
  );
};

export default Register;