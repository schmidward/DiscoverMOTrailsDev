import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import './login.css';

//TODO: Move this async function to a seperate directory
// async function loginUser(credentials) {
//   console.log(credentials);
//   console.log(JSON.stringify(credentials));
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify(credentials)
//   })
//   .then(data => data.json())
// }

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     username,
  //     password
  //   });
  //   setToken(token);
  // }

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    var basicAuth = 'Basic ' + btoa(data.username + ':' + data.password);
    console.log(basicAuth);
    fetch('http://localhost:8080/login', {
      method: 'GET',
      headers: {
        'Authorization': basicAuth
    }
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  return (
    <div className='login-wrapper'>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="label-wrapper">
              <label htmlFor="username">Email: </label>
              <input 
              type="text" 
              id="username" 
              {...register("username", { required: true })}
              />
          </div>

          <div className="label-wrapper">
              <label htmlFor="password">Password:</label>
              <input 
              type="password" 
              id="password" 
              {...register("password", { required: true })} />
          </div>

          <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }