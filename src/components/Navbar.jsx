import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            <li>sign-up</li>
        </ul>
    )
}

export default Navbar