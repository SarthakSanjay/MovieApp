import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import HorizontalCards from './HorizontalCards'

const HomeContainer = styled.div`
background-color: #000000;
height: 100vh;
width: 100vw;
padding-top: 3rem ;

`
const Home = () => {
  const [adata, setData] = useState([])

  const getImg = async () =>{
      const url = `https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=5&rapidapi-key=ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5`
      let data = await fetch(url)
      let parsedData = await data.json()
      setData(parsedData.images)

      // const arrOfObjects = parsedData.images
      // console.log(arrOfObjects)
     


      
  }
  // console.log(adata)
  // console.log(adata.images)
  // console.log(adata.images.caption)
  useEffect(() => {
      getImg();
      
  }, [])
  return (
   <HomeContainer >
  
    <Carousel  />
    <HorizontalCards heading='Top Movies' data={adata} />
   </HomeContainer>
  )
}

export default Home