import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {getData} from './api'
function PreviousArrow(props) {
  const { onClick } = props;
  return <button className='slick-prev' onClick={onClick}>Previous</button>;
}

function NextArrow(props) {
  const { onClick } = props;
  return <button className='slick-next' onClick={onClick}>Next</button>;
}

const MovieSlider = () => {


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  const [data, setdata] = useState([]) //if data is array then we have to specify empty array in useState hook



  const getData = async () => {
    let apidata = await fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
    let parsedData = await apidata.json()
    setdata(parsedData.d)
    // d[1].i.imageUrl
   
  }
  useEffect(() => {
    getData();

  }, [])

  const settings = {
    className: "slider variable-width",

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />
  };
  return (
    <Container>
      <div className='heading'>
        <h1>Top Movies</h1>
        <p style={{textAlign:"left"}}>Top movies of 2023</p>
      </div>
      <Slider {...settings}  >

      
       

      {data.map((obj) => {
        return(
          <div  className='card'  key={obj.id}>
            <img src={obj.i.imageUrl} />
            <p>{obj.l}</p>
            
          </div>
        )
      })}  
 </Slider>

    </Container>
  )
}





const Container = styled.div`
height: 100vh;
width: 100vw;
margin: 0;
padding: 0;
background-color: black;
border: 2px solid black;
color: white;




  img{
    width: 200px;
    height:300px;
    margin: 0 10px;
    border-radius: 10px;
  }
  p{
    color:wheat;
    text-align: center;
  }

.card{
  background-color: black;
  display: none;
  border: none;
}

button{
  margin: 0 50px;
  z-index: 1;
}
`

export default MovieSlider