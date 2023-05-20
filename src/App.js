import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './components/home/home.jsx';
import Login from './components/login/login';
import Register from './components/register/register';
import Header from './components/header/header.js'
import SecurePage from './components/securePage/securePage.js';
import Logout from './components/logout/logout';

import { UserContextProvider, useUserContext } from './context/userContext';
import authCheck from './utils/authCheck';

/* TODO: Set authentication context for secured APIs that calls Login function if no token is accessable 
   TODO: Set check for Auth token */


function App() {
authCheck();
  

  return (
    
  <UserContextProvider>
    <Router>
      <div>
        <Header />
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/secure" exact element={<SecurePage />} />
          <Route path="/logout" exact element={<Logout />} />
      </Routes>
      </div>
    </Router>
  </UserContextProvider>
  );
    
}

export default App;