import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import './login.css';
import { useCookies } from 'react-cookie';
import { useUserContext } from "../../context/userContext";

const LOGIN_URL = '/user';

const Login = () => {
  const {user, logIn} = useUserContext();
	const userRef = useRef();
	const errRef = useRef();

	const [formUser, setFormUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);
  const [cookies, setCookie] = useCookies(['XSRF-TOKEN', 'Authorization'])

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [formUser, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await (
      axios.get(LOGIN_URL, {
      auth: {
        username: formUser,
        password: pwd
      }
      
    }
    ));
    console.log(response);
    setCookie('XSRF-TOKEN', response.headers["x-xsrf-token"]);
    setCookie('Authorization', response.headers.authorization, { maxAge: 30000}); //maxAge counts in seconds
    logIn(response.data.id, "dummy display name", response.data.username, response.data.password, response.data.isLoggedIn);

    setFormUser('');
		setPwd('');
		setSuccess(true);
  }

  /* TODO: SET global authorization header for Axios
     TODO: Set user infomration based on login */



  return (
    <>
      <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setFormUser(e.target.value)}
              value={formUser}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account? 
            <br />
            <span className="line">
              <a href="/register">Sign Up</a>
            </span>
          </p>
        </section>
    
    
   
        <div>
          <p>User ID: {user.id}</p>
          <p>User display name: {user.displayName}</p>
          <p>User Email: {user.email}</p>
        </div>
    </>
  );
}

export default Login;