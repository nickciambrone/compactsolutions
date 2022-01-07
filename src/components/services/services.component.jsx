import React from "react";
import devices from "./devices.jpg";
import royalCloth from './royal-cloth.png'
import "./services.styles.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="services-top" style={{ marginTop: "20px" }}>
        <div className="services-information">
          <div className="services-blurb-container">
            <h3 style={{ color: "#666", marginBottom: "20px" }}>
              {" "}
              Our services for your business growth
            </h3>
            <div
              className="blue-line"
              style={{
                height: "3px",
                backgroundColor: "#0099ff",
                marginBottom: "16px",
              }}
            ></div>
            <div className="services-blurb">
              <p
                style={{
                  color: "#666",
                  marginBottom: "3rem!important",
                  lineHeight: "1.9",
                  fontSize: "18px",
                }}
              >
                Our small team of developers have over seven years of experience building full stack web applications for businesses. All of our sites come with advanced search engine optimization so that you stand out on Google Searches. We also run Google Ad campaigns in order to get your website off the ground.  
              </p>
              <p
                style={{
                  color: "#666",
                  marginBottom: "3rem!important",
                  lineHeight: "1.9",
                  fontSize: "18px",
                }}
              >
                At Compact Solutions, customer satisfaction is #1. If you are unhappy with our services we will give you your money back guaranteed. 
              </p>
            </div>
          </div>

          <div className="services-examples" style={{ marginTop: "42px" }}>
            <h3 style={{ color: "#666", marginBottom: "20px" }}>
              {" "}
              Sample Project
            </h3>
            <div
              className="blue-line"
              style={{
                height: "3px",
                backgroundColor: "#0099ff",
                marginBottom: "16px",
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
              className ='e-commerce-project'
                style={{
                
                  marginBottom: "5px",
                }}
              >
                <div className = 'royal-cloth-img-container'>
                  <img
                    width="100%"
                    style = {{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                    src={royalCloth}
                  />
                </div>
                <div className= 'royal-cloth-description-container'>
                  <h4 style={{ color: "#0099FF" }}>
                    E-Commerce Store
                  </h4>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "3rem!important",
                      lineHeight: "1.9",
                      fontSize: "18px",
                    }}
                  >
                    Our applications can handle credit card payment processing, as well as user sign up and login with classic forms or Social Media Accounts
                  </p>
                  <a target='_blank' href ='https://royal-cloth.herokuapp.com/shop'>View Project</a>
                </div>
              </div>
             
             
            </div>
          </div>
        </div>
        <div className="services-card-container">
          <div
            className="services-card"
            style={{
              backgroundColor: "#EDEEEF",
              textAlign: "left",
            }}
          >
            <img width="100% " src={devices} />
            <div className="services-card-text" style={{ padding: "10%" }}>
              <h4 style={{ color: "#0099FF" }}>
                {" "}
                Our Premium Package Includes:{" "}
              </h4>
              <p>
                {" "}
                Custom website and mobile app with unlimited pages
              </p>
              <p>
              {" "}
             User Sign up and Sign in with email and social media accounts
            </p>
              <p>
              {" "}
              E-Commerce Supported
            </p>

              <p>
                Top Speed Hosting
              </p>

              <p>
                {" "}
                Security, Updates & Daily Backups
              </p>
              <p>
              {" "}
              Custom Logo
            </p>
            <p>
              {" "}
             Domain Registration
            </p>
            <p>
            {" "}
           Monthly Performance Reports
          </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
