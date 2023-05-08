import React from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({ username: data.username, password: data.pwd })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="label-wrapper">
            <label htmlFor="username">Email: </label>
            <input type="text" id="username" {...register("username", { required: true })} />
        </div>

        <div className="label-wrapper">
            <label htmlFor="pwd">Password:</label>
            <input type="password" id="pwd" {...register("pwd", { required: true })} />
        </div>

        <input type="submit" value="Log In" />
    </form>
  );
}