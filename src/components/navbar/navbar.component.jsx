import React from "react";

import "./navbar.styles.scss";

const NavBar = (props) => {
  return (
    <div className="nav-bar" >
      <nav className="navbar navbar-expand-md navbar-light" style={{padding:'0px'}}>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className={`nav-item ${props.activePage ==='home' ? 'active' : ''}`} onClick = {() =>props.handleClick('home')}>
                <div className="nav-link">HOME</div>
              </li>
              <li className={`nav-item ${props.activePage ==='services' ? 'active' : ''}`} onClick = {() =>props.handleClick('services')}>
                <div className="nav-link">SERVICES</div>
              </li>
              <li className={`nav-item ${props.activePage ==='about' ? 'active' : ''}`} onClick = {() =>props.handleClick('about')}>
                <div className="nav-link">ABOUT</div>
              </li>
              <li className={`nav-item ${props.activePage ==='contact' ? 'active' : ''}`} onClick = {() =>props.handleClick('contact')}>
                <div className="nav-link">CONTACT</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
