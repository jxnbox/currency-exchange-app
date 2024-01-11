import { NavLink } from "react-router-dom"
import "../containers/App.css"
import LogoutTab from './LogoutTab'
import { useEffect, useState } from "react"

const Navbar = ({user}) => {
    const [menuItems, setMenuItems] = useState(["login", "sign-up"]);

    useEffect(() => {}
    , [menuItems]);

    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {!user ? (
                    menuItems.map((item,i) => <li key={`${item}-${i}`}><NavLink to={`/${item}`}>{item}</NavLink></li>)
                ) : <LogoutTab />}
            </ul>
        </nav>
    );
}

export default Navbar;