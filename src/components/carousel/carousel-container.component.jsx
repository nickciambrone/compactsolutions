import React, { useState } from "react";
import './carousel.styles.scss'
import Carousel from 'react-bootstrap/Carousel';
import Fantasy from './fantasy.png';
import Meyer from './meyer.png';
import Faclaw from './faclaw.png';

const CarouselContainer = () =>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className = 'carousel'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval = {null} >
          <Carousel.Item style={{width:'80%', marginLeft:'10%', textAlign:'center'}}>
            <img 
            className="d-block w-100"

              src={Fantasy}
              alt="First slide"
            />
           <a href='https://crwn-bets.herokuapp.com/home' target='_blank'>Fantasy Football Royale</a> 
          </Carousel.Item>
          <Carousel.Item style={{width:'80%', marginLeft:'10%', textAlign:'center'}}>
            <img 
              className="d-block w-100"
              src={Faclaw}
              alt="Second slide"
            />
              <a href='https://www.ciambronelawoffices.com' target='_blank'>Ciambrone Law</a>
          </Carousel.Item>
          <Carousel.Item style={{width:'80%', marginLeft:'10%', textAlign:'center'}}>
            <img 
              className="d-block w-100"
              src={Meyer}
              alt="Third slide"
            />
    
              <a href='https://www.meyerandassoc.com' target='_blank'>
                meyerandassoc.com
                </a>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    }

    export default CarouselContainer;