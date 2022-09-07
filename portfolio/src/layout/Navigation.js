/* eslint-disable import/no-named-as-default */
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
      <Navbar className="nav" expand="xl">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img
              src={logo}
              className="d-inline-block align-top nav__brand"
              alt="WittigNotes logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav__item">
            <NavLink to="/books" className="nav__link">
              Books
            </NavLink>
            <NavLink to="/economics" className="nav__link">
              Economics
            </NavLink>
            <NavLink to="/productivity" className="nav__link">
              Productivy
            </NavLink>
            <NavLink to="/contact" className="nav__link">
              Contact
            </NavLink>
            <NavLink to="/search" className="nav__link">
              Search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
export default Navigation;