import React from 'react'
import './App.css'
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <>
    <div className='main'>
   <img src='./logo2.png' height={130} width={100}/>
    <Link to="/" style={{textDecoration:"none"}}><h3>Home</h3></Link>
    <Link to="/service" style={{textDecoration:"none"}}><h3>Service</h3></Link>
    <Link to="/contact" style={{textDecoration:"none"}}><h3>Contact</h3></Link>
    <Link to="/about" style={{textDecoration:"none"}}><h3>About</h3></Link>
    <NotificationsIcon style={{cursor:"pointer"}}/>
  <LoginIcon style={{cursor:"pointer"}}/>
   

    </div>
   </>
  )
}

export default Header