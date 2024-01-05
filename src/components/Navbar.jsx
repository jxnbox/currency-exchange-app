import { NavLink } from "react-router-dom"
import "../containers/App.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li>
                <li><NavLink to="/sign-up">sign-up</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar