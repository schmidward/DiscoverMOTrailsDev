import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './components/home/home.jsx';
import Login from './components/login/login';
import Register from './components/register/register';
import Header from './components/header/header.js'
import SecurePage from './pages/securePage.js';
import { UserContextProvider } from './context/userContext';

function App() {
  
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

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
      </Routes>
      </div>
    </Router>
  </UserContextProvider>
  );
    
}

export default App;