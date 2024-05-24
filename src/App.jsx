import { useState } from 'react'
import Signup from './Signup';
import Home from './Home'
import Login from './Login';
import React from 'react';
import {Box, Button, TextField, Typography, } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
<Routes>
  <Route path='/register' element={< Signup></Signup>} ></Route>
  <Route path='/login' element={<Login></Login>} ></Route>
  <Route path='/home' element={<Home></Home>} ></Route>
    
</Routes>
  </BrowserRouter>
      
  )
}

export default App
