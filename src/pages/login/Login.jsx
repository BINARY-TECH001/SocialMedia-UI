import React, { useContext } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'


const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = async (e)=>{
   e.preventDefault();
    try {
      await login(); // Assuming login is an async function
      navigate('/'); // Redirect to /home after successful login
    } catch (error) {
      console.error("Login failed: ", error); // Handle login errors if any
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1> Hello World. </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            eligendi quidem corrupti voluptate vel qui cupiditate nulla
            blanditiis autem reprehenderit!
          </p>
          <span> Don't have an account? </span>
          <Link to="/register">
            <button> Register </button>
          </Link>
        </div>


        <div className="right">
          <h1> Login </h1>
          <form action="">
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}> login </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
