import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                🛒 Ecommerce app
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active navhover"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navhover" href="/category">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navhover" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navhover" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navhover" href="/logout">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navhover" href="/cart">
                Cart (0)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
