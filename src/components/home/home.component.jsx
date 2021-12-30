import React from "react";
import CarouselContainer from "../carousel/carousel-container.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
   
      <div className="home-content-container">
      <div className='intro'> Welcome to the official homepage of Compact Solutions</div>
        <div className = 'project-area'>
        <h5 style={{color:'#747474', marginBottom:'30px'}}>Our Recent Projects:</h5>
          <CarouselContainer />
        </div>
      </div>
    </div>
  );
};
export default Home;
