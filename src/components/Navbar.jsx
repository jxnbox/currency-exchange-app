import { NavLink } from "react-router-dom"
import "../containers/App.css"
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import LogoutTab from './LogoutTab'

const Navbar = ({user}) => {

    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {!user ? <div><li><NavLink to="/login">login</NavLink></li>
                <li><NavLink to="/sign-up">sign-up</NavLink></li></div> : <LogoutTab />}
            </ul>
        </nav>
    );
}

export default Navbar;