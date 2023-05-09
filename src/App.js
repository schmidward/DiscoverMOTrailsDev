import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/home.js';
import Login from './pages/Login/login.js';
import Register from './pages/register.js';
import Header from './components/header/header.js'
import SecurePage from './pages/securePage.js';
import Dashboard from './pages/dashboard.js';
import Preferences from './pages/preferences.js'

function App() {
  
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div>
        <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/secure" exact element={<SecurePage />} />
        <Route path="/dashboard" exact element={< Dashboard />} />
        <Route path="/preferences" exact element={< Preferences />} /> 
      </Routes>
      </div>
    </Router>
  );
    
}

export default App;