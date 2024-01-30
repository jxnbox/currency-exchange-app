import { NavLink } from "react-router-dom";
import "../containers/App.css";
import LogoutTab from './LogoutTab';
import { useEffect, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Header from "./Header";


const NavbarComponent = ({user}) => {
    const [menuItems, setMenuItems] = useState(["login", "sign-up"]);

    useEffect(() => {}
    , [menuItems]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><Header /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                {!user ? menuItems.map((item,i) => <NavLink className="nav-link" to={`/${item}`}>{item}</NavLink>) : <LogoutTab />}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavbarComponent;