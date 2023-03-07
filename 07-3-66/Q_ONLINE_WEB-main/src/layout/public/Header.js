import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from './menu/Menu';
import { checkActive } from '../../helper/Check';

function Header() {
  const location = useLocation();

  return (
    <header id="public">
      <Navbar collapseOnSelect expand="md" className="navbar px-4">
        <Link to="/" className="logo-title">
          Q Online
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {Menu.map((item) => (
              <Link to={item.pathname} className={`nav-link ${checkActive(location, item.pathname) ? 'nav-active' : ''}`} key={item.id}>
                {item.title}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
