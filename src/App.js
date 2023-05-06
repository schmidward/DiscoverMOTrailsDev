import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Header from './components/header/header.js'

function App() {
  return (
    <Router>
      <div>
        <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Register" exact element={<Register />} />
      </Routes>
      </div>
    </Router>
  );
    
}

export default App;