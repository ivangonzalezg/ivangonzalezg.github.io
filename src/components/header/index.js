import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import shortid from "shortid";
import logo from "../../assets/images/logo.png";
import routes from "../../routes";

import "./index.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getList() {
    return Object.values(routes).map(route => {
      if (route.inHeader) {
        const isActive = route.path === window.location.pathname;
        return (
          <Link key={shortid.generate()} to={route.path} className={`nav-link ${isActive ? "active-link" : ""}`}>
            {route.name}
          </Link>
        );
      }
      return null;
    });
  }

  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="md" variant="light">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">{this.getList()}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
