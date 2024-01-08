import { NavLink } from "react-router-dom";
const LogoutTab = () => {
    return (
        <li><NavLink to="/" onClick={(e) => console.log(e)}>logout</NavLink></li>
    );
};

export default LogoutTab;