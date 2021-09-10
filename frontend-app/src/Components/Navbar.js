// Navbar component
import Login from "./NavbarLinks/Login"
import Logo from "./NavbarLinks/Logo"
import Search from "./Search"
import Register from "./NavbarLinks/Register"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import HomePage from "./HomePage"

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


export default function Navbar(){
    return (
        <div>
            <nav className="px-4  mt-0 fixed w-full z-10 top-0 text-grey-900  flex justify-between " style={{backgroundImage:'linear-gradient(to right, rgb(91, 121, 162) 0%, rgb(46, 68, 105) 100%)'}}>
                <div className="flex justify-between space-x-4 m-2">
                    <div><Link to="/"><Logo/></Link></div>
                    <div className=""><Search/></div>
                </div>
            <div className="flex justify-between gap-4 mt-1">
                <div className="flex justify-between space-x-4 m-2 mt-2">
                    <Link to="/login">
                    <Login/>
                    </Link>
                </div>
                <div className="flex justify-between space-x-4 m-2 mt-2">
                    <Link to="/register"><Register/>
                    </Link>
                </div>
            </div>
            </nav>
        </div>
    );
}
