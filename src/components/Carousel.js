import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import response from './Api';

const Container = styled.div`
height:50vh;
background-color: red;

div{
    height: 10vh;
    background-color: white;
    height:50vh;
    /* color: yellow; */
}


`
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "white", // Change this to your desired color
              }}
            />
          )
        
      };
  return (
    <Container>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
        
        <div>
            <h3>1</h3>
            
        </div>
          
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Container>
  )
}

export default Carousel