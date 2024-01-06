import { NavLink } from "react-router-dom"
import "../containers/App.css"

const Navbar = ({status}) => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {!status ? <li>logout</li> : <div><li><NavLink to="/login">login</NavLink></li>
                <li><NavLink to="/sign-up">sign-up</NavLink></li></div>}
            </ul>
        </nav>
    )
}

export default Navbar