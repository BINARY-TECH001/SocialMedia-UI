import React, { useContext } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'  
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
// import UserImg from '../../images/user.png'
import { DarkModeContext } from '../../context/darkModeContext'
import { AuthContext } from '../../context/authContext'


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" className="link">
        <span>Binarysocial</span>
        </Link>
        <HomeOutlinedIcon className='icon'/>
        {darkMode ? (
           <WbSunnyOutlinedIcon onClick={toggle}/>
        ) : (
          <DarkModeOutlinedIcon className='icon' onClick={toggle}/>
        )}
        <GridViewOutlinedIcon className='icon'/>

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon className='icon'/>
        <EmailOutlinedIcon className='icon'/>
        <NotificationsOutlinedIcon className='icon'/>
        <div className="user">
          <img src={currentUser.profilePic} alt="Profile" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar