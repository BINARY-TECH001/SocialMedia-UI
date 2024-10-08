import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Navbar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar'
import Righbar from './components/rightbar/Rightbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import "./style.scss"

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {

  const { currentUser } = useContext(AuthContext)
  console.log("current user: ", currentUser)
  
  const {darkMode} = useContext(DarkModeContext)
  
  
  const Layout = () =>{
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
  
        <div style={{display: "flex"}}>
          <Leftbar />

          <div style={{flex: 6}}>
          <Outlet />
          </div>
          <Righbar />
        </div>
      </div>
    )
  }

    const ProtectedRoute = ({children}) =>{
      if (!currentUser){
        return <Navigate to="/login" />
      }
      return children
    }


    const router = createBrowserRouter([
      {
        path: '/',
        element: <ProtectedRoute><Layout /></ProtectedRoute>,
        children:[
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/profile/:id",
            element: <Profile />
          },

        ]
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ])

  return (

    <div className="App">

      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
