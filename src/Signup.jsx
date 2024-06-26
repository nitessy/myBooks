
import React from 'react';
import { useState } from 'react'
import {Box, Button, TextField, Typography, } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';
import './assets/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

function Signup() {

const navigate = useNavigate()
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserNameTouched, setEnteredUserNameTouched] = useState(false);
  
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

    const validEmail = new RegExp(
        '^[a-z0-9]+@[a-z0-9.]+$'
     );
    const enteredEmailIsValid = validEmail.test(enteredEmail);
const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;
// const enteredEmailIsInValid = !enteredEmailIsValid;
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+:?/]).{8,}$');
const enteredPasswordIsValid = validPassword.test(enteredPassword);


//  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');
 
 const enteredPasswordIsInValid = !enteredPasswordIsValid && enteredPasswordTouched;
// const enteredPasswordIsInValid = !enteredPasswordIsValid;

const enteredUserNameIsInvalid = enteredUserName ==='' && enteredUserNameTouched;




const emailHandler = (event) => {
  setEnteredEmail(event.target.value);
}
const passwordHandler = (event) =>{
  setEnteredPassword((event.target.value));
}
const emailBlurHandler = (event) =>{
  setEnteredEmailTouched(true);
}
const passwordBlurHandler = (event) =>{
  setEnteredPasswordTouched(true);
}
const userNameHandler = (event) =>{
  setEnteredUserName(event.target.value);
}
const userNameBlurHandler = (event) =>{
  setEnteredUserNameTouched(true);
}

// const navigate = useNavigate();

const submitHandler = (event) =>{
  event.preventDefault();
  
  
if (!enteredEmailIsValid || !enteredPasswordIsValid || enteredUserNameIsInvalid){
  setEnteredEmailTouched(true);
  setEnteredPasswordTouched(true);
  setEnteredUserNameTouched(true);
  return;
}

axios.post('https://my-books-delta.vercel.app/login/register', {enteredUserName, enteredEmail, enteredPassword})
  .then(result => {console.log(result)
navigate('/login')

  })
  .catch(err => console.log(err))
// navigate("/home");

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
}
}







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
   
                <TextField helperText={enteredUserNameIsInvalid?'Username cannot be empty':''} sx={txStyle} onChange={userNameHandler} onBlur={userNameBlurHandler} value={enteredUserName} error={enteredUserNameIsInvalid} label='Username' size='small' margin='normal' variant='outlined' placeholder='Username'></TextField>
                {/* <input name='Username' onChange={userNameHandler} value={enteredUserName} placeholder='Username' label='Username' onBlur={userNameBlurHandler} ></input> */}
                <TextField helperText={enteredEmail==='' && enteredEmailTouched ?'E-mail cannot be empty':enteredEmailIsInValid?'Please enter a valid Email':''}value={enteredEmail} onChange={emailHandler} onBlur={emailBlurHandler}error={enteredEmailIsInValid}  sx={txStyle } label='Email' size='small' margin='normal' variant='outlined' placeholder='E-mail'></TextField>
                <TextField helperText={enteredPassword==='' && enteredPasswordTouched?'Please enter the password!':enteredPassword.length<8 && enteredPasswordTouched ?'Password is too short': enteredPasswordIsInValid?'Please enter a valid password':''} type={showPass?"text": "password"} value={enteredPassword} onChange={passwordHandler} onBlur={passwordBlurHandler} error={enteredPasswordIsInValid} sx={txStyle} label='Password' size='small' margin='normal' variant='outlined' placeholder='Password' ></TextField>
                <p  name="toggle" onClick={handleShow} className='show' id='1'> Show password </p>
                <Button type='submit'  variant='contained' color='primary' sx={{
                    marginTop:1, marginBottom:1.5, borderRadius:3
                }}> Signup</Button>

                <Link to="/login" className='btn btn-default border w-60 bg-light'> Login</Link>
            </Box>
          
        </form>
    </div>
  )
}

export default Signup;
