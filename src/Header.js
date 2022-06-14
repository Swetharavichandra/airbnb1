import React from 'react'
import'./Header.css';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom"; 




function Header() {
  
  
  
  return (
    <div className='header'>
       <Link to="/"><img className='logo' src='https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png' alt='airbnblogo'/>
       </Link>

  <div className='hostbox'>
    <Link to="host" style={{ textDecoration: 'none',color:'black',alignItems:"center" }}>
    <p className='anchor'>Become a host</p>
    </Link>
    
    <Link to="contact" style={{ textDecoration: 'none',color:'black' }} >
    <ContactPageOutlinedIcon/>
      </Link>
      <Link to="login" style={{ textDecoration: 'none',color:'black' }} >
      <AccountCircleOutlinedIcon/>
      </Link>

    


  </div>

    







    </div>
  )
}

export default Header