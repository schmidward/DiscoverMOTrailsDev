import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import './login.css';

//TODO: Move this async function to a seperate directory
async function loginUser(credentials) {
  console.log(credentials);
  console.log(JSON.stringify(credentials));
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  // const {
  //   // register,
  //   handleSubmit,
  //   // formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   fetch('http://localhost:8080/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type' : 'application/json'},
  //       body: JSON.stringify({ username: data.username, Credential: data.pwd })
  //   })
  //   .then(response => response.text())
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error));
  // }

  return (
    <div className='login-wrapper'>
      <form className="form" onSubmit={handleSubmit}>
          <div className="label-wrapper">
              <label htmlFor="username">Email: </label>
              <input type="text" id="username" onChange={e => setUserName(e.target.value)}/>
          </div>

          <div className="label-wrapper">
              <label htmlFor="pwd">Password:</label>
              <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
          </div>

          <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}