import React from 'react'
import'./Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from "react-router-dom"; 
import { useSelector } from 'react-redux';



function Header() {
  
  const isLoggedIn =useSelector((state) => state.isLoggedIn);
  
  return (
    <div className='header'>
       <Link to="/"><img className='logo' src='https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png' alt='airbnblogo'/>
       </Link>
<div className='header-center'>
  <input type="text" />
  <SearchIcon className='searchicon'/>
  </div>
  <div className='hostbox'>
    <Link to="host" style={{ textDecoration: 'none',color:'black',fontWeight:'bold',alignItems:"center" }}>
    <p className='anchor'>Become a host</p>
    </Link>
    
    <Link to="login" style={{ textDecoration: 'none',color:'black',fontWeight:'bold' }} >
    { !isLoggedIn &&<AccountCircleRoundedIcon/>}
      </Link>
      <Link to="login" style={{ textDecoration: 'none',color:'black',fontWeight:'bold' }} >
      <LoginIcon/>
      </Link>

    


  </div>

    







    </div>
  )
}

export default Header