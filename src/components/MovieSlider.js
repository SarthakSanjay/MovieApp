import React, {useState, useEffect } from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import {getData} from './api'


const MovieSlider = () => {

  
  const options = {
    method: 'GET',
	headers: {
    'X-RapidAPI-Key': 'ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

const [data, setdata] = useState('')



// const getData = async () => {
//     let data = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
//     let parsedData = await data.json()
//     let list = parsedData.d
//     setdata(list)
//     console.log(list.i)
//     // console.log(list)
   
// }
useEffect(()=>{getData()},[])

    const settings = {
        className: "slider variable-width",

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true
      };
  return (
    <Container>
        <div className='heading'>
            <h1>Top Movies</h1>
            <p>Top movies of 2023</p>
        </div>
        <Slider {...settings}>
        {/* {
          data.map((listitem)=>{
      listitem.i.map((element)=>{
        return (
          <div className="slick-slide"  style={{width:175 }}>
            <h3>1</h3>
            <img src={element.imgUrl} />
          </div>
        )
      })
    })
        } */}
          {/* {
            data.map((elements)=>{
              return (
                <div className="slick-slide" key={elements.id} style={{width:175 }}>
            <h3>1</h3>
            <img src={elements.i.imgUrl} />
          </div>
              )

            })
          } */}
          {/* <div className="slick-slide" style={{width:175}}>
            <h3>2</h3>
          </div>
          <div className="slick-slide" style={{width:175}}>
            <h3>3</h3>
          </div>
          <div className="slick-slide" style={{width:175}}>
            <h3>4</h3>
          </div>
          <div className="slick-slide" style={{width:175}}>
            <h3>5</h3>
          </div>
          <div className="slick-slide" style={{width:175}}>
            <h3>6</h3>
          </div>
          <div className="slick-slide" style={{width:175}}>
            <h3>7</h3>
          </div>
          <div className="slick-slide" style={{width:175}}>
            <h3>8</h3>
          </div>
          <div className="slick-slide" style={{width:175}}>
            <h3>9</h3>
          </div> */}
        </Slider>

    </Container>
  )
}





const Container = styled.div`
height: 60vh;
width: 100vw;
margin: 0;
padding: 0;
background-color: palegreen;
border: 2px solid black;
.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0 ;
    padding: 0;
}

.slick-slide {
    background-color: purple;
  margin: 0 20px;
  height: 16rem;
  border-radius: 6px;
 
}

`

export default MovieSlider