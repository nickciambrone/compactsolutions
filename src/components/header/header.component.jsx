import React from "react";
import WorkStation from "./workstation.jpg";
import Logo from "./logo.svg";
import NavBar from "../navbar/navbar.component";
import { Parallax, Background } from 'react-parallax';

import "./header.styles.scss";


const Header = (props) => {
  return (
    <div className="header">
    <div className="work-station-container" >
    <Parallax bgImage={WorkStation} bgImageAlt="the cat" style={{height:'31vw'}}>
    </Parallax>
      <div className='brand'> <div className = 'logo-container' style = {{width:'40%'}}>
      <img 
      src={Logo} 
      alt='logo' className = 'logo'/></div> <div className = 'compact-solutions' >COMPACT SOLUTIONS</div></div>
    </div>
    <NavBar handleClick={props.handleClick} activePage={props.activePage} />
  </div>
  );
};
export default Header;
