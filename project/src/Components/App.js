import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
const App = () => {
  return (
   <div>
      <Routes>
        <Route  path="/" element={<Navbar/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signusp" element={<Signup/>} />
        
      </Routes>
    
    </div>
  );
};

export default App;