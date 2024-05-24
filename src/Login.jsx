import React from 'react';
import { useState } from 'react'
import {Box, Button, TextField, Typography, } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';
import './assets/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';


function Login(){
    const [enteredEmail, setEnteredEmail] = useState()
    const [enteredPassword, setEnteredPassword] = useState()
    const navigate = useNavigate()


const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const passwordHandler = (event) =>{
    setEnteredPassword((event.target.value));
  }


const submitHandler = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:3001/login', {enteredEmail, enteredPassword})
    .then(result => {console.log(result)
        if(result.data === "Success"){
            navigate('/home')
        }


    })
    .catch(err => console.log(err))
}

var id =  document.getElementsByName("toggle").id;
const [showPass, setShowPass] = useState(false);
const handleShow = () =>{setShowPass(!showPass);
  if(id == "1"){
  document.querySelector('.show').innerHTML = "Show Password";
  document.getElementsByName("toggle").id=0;
}
else{
document.querySelector('.show').innerHTML = "Hide Password";
document.getElementsByName("toggle").id=1;
} }

const sxStyle={
    opacity: 0.8,
    fontSize: '1rem',
    backgroundColor: '#b6d0e2',
    display:'flex',
    flexDirection: 'column',
    maxWidth: 340, '@media(max-width:600px)': {maxWidth: 310},
    margin: 'auto',
    padding: 3,
    borderRadius: 5,
    position: 'relative',
    boxShadow: '5px 5px 10px #ccc',
    top: '70px', '@media(max-width:600px)' : {top:'120px' , maxWidth:310},
    justifyContent: 'center',
    alignItems: 'center' ,
   };
  
   const txStyle={
    border: '10px red' ,
   }
    return (
      <div className='background'>
          <form onSubmit={submitHandler} >
        
              {/* <Box  display='flex' flexDirection={'column'} maxWidth={340} alignItems='center'  justifyContent='center' margin='auto' marginTop={5} padding={2.5} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{":hover":{boxShadow:'10px 10px 20px #ccc',}, backgroundColor:'#b6d0e2'} }> */}
             
              <Box sx={sxStyle} >
              <div className='curl'></div>
              <div className='fold'></div>
             
                  <Typography fontWeight={'540'}  fontFamily={'Montserrat'}
     variant='h5' sx={{color:'brown'}} padding={2.5} textAlign='center' >BookRack</Typography>
     
                  
                  {/* <input name='Username' onChange={userNameHandler} value={enteredUserName} placeholder='Username' label='Username' onBlur={userNameBlurHandler} ></input> */}
                  <TextField value={enteredEmail} onChange={emailHandler} sx={txStyle } label='Email' size='small' margin='normal' variant='outlined' placeholder='E-mail'></TextField>
                  <TextField  type={showPass?"text": "password"} value={enteredPassword} onChange={passwordHandler}  sx={txStyle} label='Password' size='small' margin='normal' variant='outlined' placeholder='Password' ></TextField>
                  <p  name="toggle" onClick={handleShow} className='show' id='1'> Show password </p>
                  <Button type='submit'  variant='contained' color='primary' sx={{
                      marginTop:1, marginBottom:1.5, borderRadius:3
                  }}> Login</Button>
  
                  <Link to="/register" className='btn btn-default border w-60 bg-light'> Signup </Link>
              </Box>
            
          </form>
      </div>
    )
  
}
  export default Login;
  