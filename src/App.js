import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/home.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Header from './components/header/header.js'
import SecurePage from './pages/securePage';

function App() {
  return (
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
  );
    
}

export default App;