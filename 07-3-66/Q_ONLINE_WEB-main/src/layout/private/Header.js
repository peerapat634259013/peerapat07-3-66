import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from './menu/Menu';
import { checkActive } from '../../helper/Check';

function Header() {
  const location = useLocation();

  return (
    <header id="private">
      <Navbar collapseOnSelect expand="lg" className="navbar px-4">
        <Link to="/" className="logo-title">
          Q Online
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto px-3">
            {Menu.map((item) => (
              <Fragment key={item.id}>
                {item.type === 1 ? (
                  <Link to={item.pathname} className={`nav-link menu-mobile ${checkActive(location, item.pathname) ? 'nav-active' : ''}`} key={item.id}>
                    {item.title}
                  </Link>
                ) : item.type === 2 && item.subMenu ? (
                  <Fragment>
                    <NavDropdown title={item.title} id="collasible-nav-dropdown">
                      {item.subMenu.map((sub) => (
                        <div className="px-2" key={sub.id}>
                          <Link to={sub.pathname} className={`nav-link text-black ${checkActive(location, sub.pathname) ? 'nav-active' : ''}`}>
                            {sub.title}
                          </Link>
                        </div>
                      ))}
                    </NavDropdown>
                  </Fragment>
                ) : null}
              </Fragment>
            ))}
          </Nav>
          <Nav className="pl-3">
            <Link to="#" className="nav-link text-black">
              ออกจากระบบ
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
