import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HorizontalCardsRow = styled.div`

height: 100vh;
width: 100vw;
background-color: black;
h1 {
   color: #e2b616 ;
   span {
      margin: 0px 20px;
      background-color: #e2b616;
     
    }
}
p{
    margin: 0px 20px;
    color: #e2b616 ;
}


.row{
   
  margin: 20px;

}

.slick-slide {
    background-color: purple;
  margin: 0 20px;
  height: 25rem;
  width: 12rem;
  border-radius: 10px;
}
.slick-prev,
.slick-next {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.slick-prev {
  left: 20px;
}

.slick-next {
  right: 20px;
}
.mimages{
    width: 100%;
}
`



function PreviousArrow(props) {
    const { onClick } = props;
    return <button className='slick-prev' onClick={onClick}>Previous</button>;
}

function NextArrow(props) {
    const { onClick } = props;
    return <button className='slick-next' onClick={onClick}>Next</button>;
}

const HorizontalCards = ({ data }) => {
    // console.log(data)
    // data.map((item)=>{
    //     console.log(item.url)
    // })
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <HorizontalCardsRow >

            <h1><span>|</span></h1>
            <p>2023</p>
            <Slider {...settings} className='row' >

                {
                    data.map(obj => {
                        const list = obj.url
                        {/* const actorImg = obj.relatedNames.map(()) */}
                        {/* { console.log(actorImg)  } */}
                        return <div className='card' >
                            <img style={{ width: "192px" ,height:"200px"}} src={list} />
                            <p>{obj.caption}</p>
                        </div>
                    })
                }


            </Slider>


        </HorizontalCardsRow>
    )
}

export default HorizontalCards