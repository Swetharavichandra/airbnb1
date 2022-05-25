 import { Box,Button,TextField,Typography } from '@mui/material';
 import React, { useState } from 'react';
 import'./login.css';
 import axios from 'axios';
 import { useDispatch } from 'react-redux';
 import { authActions } from './store';
 import { useHistory } from 'react-router-dom';
 
 const Login = () => {
   const navigate=useHistory();
   
  //  userinput is captured

   const dispath = useDispatch();
   const [inputs, setInputs] = useState({
     name:"",email:"",password:""
   });
   const [isSignup, setIsSignup] = useState(false);
   const handleChange = (e)=>{
     setInputs((prevState)=>({
       ...prevState,
       [e.target.name] : e.target.value,
      
     }));
   };

  //  input calculated and stored in backend deployed in heroku
   const sendRequest = async (type = "login") => {
     const res = await axios
       .post(`https://still-brushlands-17949.herokuapp.com/user/${type}`, {
         name: inputs.name,
         email: inputs.email,
         password: inputs.password,
       })
       .catch((err) => console.log(err));
     const data = await res.data;
     return data;
   };

// when logged in it will be directed to home page
     const handleSubmit = (e) =>{
       e.preventDefault(); 
       console.log(inputs);
       if(isSignup){
         sendRequest("signup").then(()=>dispath(authActions.login())).then(() => navigate.push("/home")).then(data=>console.log(data))
       } else {
         sendRequest().then(()=>dispath(authActions.login())).then(() => navigate.push("/home")).then(data=>console.log(data))
       }
     };

   return (
     <div>
       <form onSubmit={handleSubmit}>
       <Box className='box'>
         <Typography variant="h4" padding={3} textAlign="center">
           {isSignup ? "Sign up":"Login"}
         </Typography> 
         { isSignup && <TextField 
         name='name' 
         onChange={handleChange} 
         value={inputs.name} 
         placeholder="Name" 
         margin='normal'/>}{""}

         <TextField name='email' onChange={handleChange} 
         value={inputs.email} 
         type={'email'} 
         placeholder="Email" 
         margin='normal'/>
        
         <TextField name='password' 
         onChange={handleChange} 
         value={inputs.password} type={'password'} 
         placeholder="Password"
          margin='normal'/>
        
         <Button type='submit' variant='outlined'>Submit</Button>
         <Button onClick={()=>setIsSignup(!isSignup)}>{isSignup ? "Login" : "Signup"}
         </Button>

       </Box>
       </form>
     </div>
   )
 }

 export default Login