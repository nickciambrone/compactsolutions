import React from "react";
import CarouselContainer from "../carousel/carousel-container.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content-container">
        <div className="intro" style={{marginTop:'16px'}}>
          {" "}
          <h4 style={{ color: "#666", textAlign:'center' }}>What do we do at Compact Solutions?</h4>
          <div className = 'blue-line' style={{height:'2px', width:'90%', marginLeft:'5%', backgroundColor:'#0099ff', marginTop:'20px', marginBottom:'20px'}}></div>
          <p style = {{color:'#666', lineHeight:'1.9'}}> At Compact Solutions, we are dedicated to one goal: <b>provide businesses with the highest quality web and mobile applications.</b> </p>
          <p style = {{color:'#666', lineHeight:'1.9'}}> Which is why we make sure that our design process is consistent with the top development teams in the technology industry. We don't just build your app, we solve your problem. After the development takes place, we work with our clients to ensure that the application solves whatever problem they were aiming to fix, and also provides a smooth user experience.   </p>
          <p style = {{color:'#666', lineHeight:'1.9'}}>After the build, we don't wave our goodbyes. Our dedicated team is here to answer all questions and ensure 100% satisfaction. </p>

        </div>
        <div className="project-area">
          <h5 style={{ color: "#747474", marginBottom: "20px" }}>
            Our Recent Projects:
          </h5>
          <CarouselContainer />
        </div>
      </div>
    </div>
  );
};
export default Home;
