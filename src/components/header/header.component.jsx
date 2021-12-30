import React from "react";
import WorkStation from "./workstation.jpg";
import Logo from "./ic_dns_24px.svg";

import NavBar from "../navbar/navbar.component";
import "./header.styles.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="work-station-container">
        <img 
        src={WorkStation} 
        width="100%" alt='work-station'/>
        <div className='brand'> <div style = {{width:'70%'}}>
        <img 
        src={Logo} 
        alt='logo'/></div> <span className = 'compact-solutions'>COMPACT SOLUTIONS</span></div>
      </div>
      <NavBar handleClick={props.handleClick} activePage={props.activePage} />
    </div>
  );
};
export default Header;
