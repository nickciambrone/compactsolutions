import React from "react";

import "./about.styles.scss";
import Michael from './about-02.jpg'
const About = () => {
  return (
    <div className="about">
      <div className="about-cards" style={{marginTop:'15px'}}>
        <div className = 'message-from-founder-container' >
        <div className = 'message-from-founder'>
        <h3 class="tm-title-gray mb-3">Message from the Founder</h3>
        <div class="blue-line" style={{height: "3px", backgroundColor: "rgb(0, 153, 255)", marginBottom: "16px"}}></div>
        <p style={{color:'#666', textAlign:'left', lineHeight:'1.9', fontSize:'18px'}}>
        Donec convallis orci id scelerisque convallis. Suspendisse varius sapien mauris. Proin accumsan.

        </p>
        <p style={{color:'#666', textAlign:'left', lineHeight:'1.9', fontSize:'18px'}}>
        Quisque accumsan lorem sed bibendum vehicula. Aenean gravida, nunc ac bibendum bibendum.

        </p>
        </div>
        </div>
        <div className = 'founder'>
            <img src={Michael}/>
            <h3 className = 'nicholas-tag' style = {{color:'#007bff', textAlign:'left'}}>
            <span>Nicholas Ciambrone </span>
            <span style={{color:'#666', fontSize:'80%', fontWeight:400}}>(Founder)</span>
            </h3>
        </div>
        <div className = 'cofounder'>
        <img src={Michael}/>
        <h3 className = 'michael-tag' style = {{color:'#007bff', textAlign:'left'}}>
        <span>Michael Owen </span>
        <span style={{color:'#666', fontSize:'80%', fontWeight:400}}>(Co-founder)</span>
        </h3>

        </div>
      </div>
      <div className="about-parallax"></div>
    </div>
  );
};
export default About;
