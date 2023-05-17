import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import './login.css';
import { useCookies } from 'react-cookie';


export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [basicAuth, setBasicAuth] = useState();
  const [userData, setUserData] = useState("");
  const [cookies, setCookie] = useCookies(['XSRF-TOKEN', 'Authorization'])

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




  async function getUser(username, password) {
    
      const response = await (
        axios.get('http://localhost:8080/user', {
        auth: {
          username: username,
          password: password
        }
        
      }
      ));
      console.log(response);
      console.log(response.headers['x-xsrf-token']);
      setCookie('XSRF-TOKEN', response.headers["x-xsrf-token"]);
      setCookie('Authorization', response.headers.authorization, { maxAge: 30000}); //maxAge counts in seconds
      console.log(cookies);
      if (response.headers.authorization) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }


      return response.data;
     }

  const onSubmit = (data) => {
    console.log(data);
    var auth = 'Basic ' + btoa(data.username + ':' + data.password);
    console.log(auth);
    setUserName(data.username);
    setPassword(data.password);
    console.log(username);
    console.log(password);
    
    const userData = getUser(data.username, data.password);
    
  }

  return (
    <>
    <div className='login-wrapper'>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* TODO: Reset Login form values after successful login */}
          
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
        <div>
          <p>User ID: {userData.id}</p>
          <p>User Email: {userData.username}</p>
          <p>Role: {userData.role}</p>
        </div>

    </div>
    </>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }