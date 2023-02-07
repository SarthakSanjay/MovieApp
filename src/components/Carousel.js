import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const Container = styled.div`
      height:50vh;
      background-color: red;

      div{
    height: 10vh;
    background-color: white;
    height:50vh;
  

    img {
      width: 100%;
      height: 50vh;
      background-position: center;
      
      }
  }
`


const Carousel = (props) => {
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
     
      <Slider {...settings}>
        <div>
          <p>1</p>

        </div>
        <div>
          <p>2</p>

        </div>
        <div>
          <p>3</p>

        </div>
        <div>
          <p>4</p>

        </div>




      </Slider>
    </Container>
  )
}

export default Carousel