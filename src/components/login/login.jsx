import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import './login.css';

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [basicAuth, setBasicAuth] = useState();
  const [data, setData] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       data.username,
//       data.password
//     });
//     setToken(token);
//   }

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

/* TODO: Convert login function to axios */

  async function getUser(auth) {
    
      const data = await (
        await fetch('http://localhost:8080/user', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': auth
        
      }
      })).json();
      console.log(data);
      return data;
     }

  const onSubmit = (data) => {
    console.log(data);
    var auth = 'Basic ' + btoa(data.username + ':' + data.password);
    console.log(auth);
    setBasicAuth(auth);
    console.log(basicAuth);
    // fetch('http://localhost:8080/user', {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': auth
    //   }
    // }).then(function(response) { 
    //   console.log(response); 
    //   return response.json();
    // })
    // .then(function(data) {
    //   console.log(data);
    //   setData(data);
    // });

    setUserName(data.username);
    setPassword(data.password);
    const userData = getUser(auth);
    
  }

  return (
    <>
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
    </>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }