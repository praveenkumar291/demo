import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import { Link } from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* <!-- Brand --> */}
        <Link className="navbar-brand" href="/">
          E-commerce
        </Link>

        {/* <!-- Links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">
              Register
            </Link>
          </li>

          {/* <!-- Dropdown --> */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >
              More
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                About
              </a>
              <a className="dropdown-item" href="#">
                Services
              </a>
              <a className="dropdown-item" href="#">
                Contact
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
