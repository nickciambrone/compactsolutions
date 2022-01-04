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
                This is another HTML page for services in Business Oriented
                Template. You are allowed to use this CSS template for your
                business or personal website. You are NOT allowed to
                re-distribute the template ZIP file on any template collection
                website. Contact us for more information about this template.
              </p>
              <p
                style={{
                  color: "#666",
                  marginBottom: "3rem!important",
                  lineHeight: "1.9",
                  fontSize: "18px",
                }}
              >
                Nulla eget ipsum nec augue semper convallis non a lacus. Integer
                vel condimentum neque. Fusce sollicitudin arcu et tortor
                lobortis rhoncus. Morbi accumsan efficitur nunc, in faucibus
                velit pretium quis. Sed elementum auctor felis eu tristique.
              </p>
            </div>
          </div>

          <div className="services-examples" style={{ marginTop: "42px" }}>
            <h3 style={{ color: "#666", marginBottom: "20px" }}>
              {" "}
              Our Project Catalog
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "5px",
                }}
              >
                <div style={{ width: "40%", marginLeft: "2%" }}>
                  <img
                    width="100%"
                    style = {{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                    src={royalCloth}
                  />
                </div>
                <div style={{ width: "40%", marginLeft: "5%" }}>
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
                    Donec mauris eros, suscipit fermentum faucibus sagittis,
                    dictum eget nulla. Duis maximus porttitor ornare. Maecenas
                    blandit vestibulum massa at accumsan. Duis ultricies mi id
                    justo porttitor, et sollicitudin justo vehicula.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "5px",
                }}
              >
                <div style={{ width: "40%", marginLeft: "2%" }}>
                  <img
                    width="100%"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                  />
                </div>
                <div style={{ width: "40%", marginLeft: "5%" }}>
                  <h4 style={{ color: "#0099FF" }}>
                    Maecenas molestie varius ipsum
                  </h4>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "3rem!important",
                      lineHeight: "1.9",
                      fontSize: "18px",
                    }}
                  >
                    Donec mauris eros, suscipit fermentum faucibus sagittis,
                    dictum eget nulla. Duis maximus porttitor ornare. Maecenas
                    blandit vestibulum massa at accumsan. Duis ultricies mi id
                    justo porttitor, et sollicitudin justo vehicula.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "5px",
                }}
              >
                <div style={{ width: "40%", marginLeft: "2%" }}>
                  <img
                    width="100%"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                  />
                </div>
                <div style={{ width: "40%", marginLeft: "5%" }}>
                  <h4 style={{ color: "#0099FF" }}>
                    Maecenas molestie varius ipsum
                  </h4>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "3rem!important",
                      lineHeight: "1.9",
                      fontSize: "18px",
                    }}
                  >
                    Donec mauris eros, suscipit fermentum faucibus sagittis,
                    dictum eget nulla. Duis maximus porttitor ornare. Maecenas
                    blandit vestibulum massa at accumsan. Duis ultricies mi id
                    justo porttitor, et sollicitudin justo vehicula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-card-container">
          <div
            className="services-card"
            style={{
              width: "90%",
              backgroundColor: "#EDEEEF",
              textAlign: "left",
            }}
          >
            <img width="100% " src={devices} />
            <div className="services-card-text" style={{ padding: "10%" }}>
              <h4 style={{ color: "#0099FF" }}>
                {" "}
                Fusce sollicitudin arcu et tortor{" "}
              </h4>
              <p>
                {" "}
                Cras rhoncus tempor consequat. Donec convallis orci id
                scelerisque convallis. Suspendisse varius sapien mauris.
              </p>

              <p>
                Quisque accumsan lorem sed bibendum vehicula. Aenean gravida,
                nunc ac bibendum bibendum.
              </p>

              <p>
                {" "}
                Donec convallis orci id scelerisque convallis. Suspendisse
                varius sapien mauris. Proin accumsan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
