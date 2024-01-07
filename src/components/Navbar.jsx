import { NavLink } from "react-router-dom"
import "../containers/App.css"
import LogoutTab from "./LogoutTab";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import fbApp from '../firebase/firebase';


const Navbar = () => {
    const [user,setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const useri = auth.currentUser;
        console.log(useri)
    }, [])
    
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {!user ? <div><li><NavLink to="/login">login</NavLink></li>
                <li><NavLink to="/sign-up">sign-up</NavLink></li></div> : <LogoutTab />}
            </ul>
        </nav>
    )
}

export default Navbar;