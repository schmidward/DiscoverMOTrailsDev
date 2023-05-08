import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css';

export default function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({ username: data.username, Credential: data.pwd })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  return (
    <div className='login-wrapper'>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="label-wrapper">
              <label htmlFor="username">Email: </label>
              <input type="text" id="username" />
          </div>

          <div className="label-wrapper">
              <label htmlFor="pwd">Password:</label>
              <input type="password" id="pwd" />
          </div>

          <input type="submit" value="Log In" />
      </form>
    </div>
  );
}