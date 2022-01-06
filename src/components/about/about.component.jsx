import React from "react";

import "./about.styles.scss";
import Michael from "./about-02.jpg";
const About = ({handleClick}) => {
  return (
    <div className="about">
      <div className="about-cards" style={{ marginTop: "15px" }}>
        <div className="message-from-founder-container">
          <div className="message-from-founder">
            <h3 class="tm-title-gray mb-3">Message from the Founder</h3>
            <div
              class="blue-line"
              style={{
                height: "3px",
                backgroundColor: "rgb(0, 153, 255)",
                marginBottom: "16px",
              }}
            ></div>
            <p
              style={{
                color: "#666",
                textAlign: "left",
                lineHeight: "1.9",
                fontSize: "18px",
              }}
            >
              My team and I will put together a prototype based on your specifications. After the initial build, you get to provide us with any additions/changes you'd like us to make.
            </p>
            <p
              style={{
                color: "#666",
                textAlign: "left",
                lineHeight: "1.9",
                fontSize: "18px",
              }}
            >
              And of course, this is all backed by our 30 day money back guarantee
            </p>
          </div>
        </div>
        <div className = 'executive-team'>
        <div className="founder">
          <img src={Michael} />
          <h3
            className="nicholas-tag"
            style={{
              color: "#007bff",
              textAlign: "left",
              marginBottom: "12px",
            }}
          >
            <span>Nicholas Ciambrone </span>
            <span style={{ color: "#666", fontSize: "80%", fontWeight: 400 }}>
              (Founder)
            </span>
          </h3>
          <p
            style={{
              color: "#666",
              textAlign: "left",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
          Nicholas started his career at a small Tech startup, where he built a new platform for the CEO to analyze user feedback. He then worked as a programmer for an insurance company before starting Compact Solutions
          </p>
        </div>
        <div className="cofounder">
          <img src={Michael} />
          <h3
            className="michael-tag"
            style={{
              color: "#007bff",
              textAlign: "left",
              marginBottom: "12px",
            }}
          >
            <span>Michael Owen </span>
            <span style={{ color: "#666", fontSize: "80%", fontWeight: 400 }}>
              (Co-founder)
            </span>
          </h3>
          <p
            style={{
              color: "#666",
              textAlign: "left",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
           Michael comes from a career in Finance. He worked as a software engineer for Bank of America and United Bank of Switzerland before joining Compact Solutions
          </p>
        </div>
        </div>
      </div>
      <div className="about-parallax">
        <div className="black-screen">
          <p>
            If you aren't sure wether or not you could use our services, just
            send us a message and we will get back to you right away with a free
            consultation.
          </p>
          <div onClick={()=>handleClick('contact')} className = 'contact-us-button' style = {{padding:'10px 25px', backgroundColor:'#0099ff', width:'150px', color:'#fff'}}>Contact Us</div>
        </div>
      </div>
    </div>
  );
};
export default About;
