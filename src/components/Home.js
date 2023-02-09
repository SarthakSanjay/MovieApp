import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MovieCarousel from './MovieCarousel'
import TopMovies from './TopMovies'


const HomeContainer = styled.div`
background-color: gray;
border: 2px solid blue;
height: 100vh;
width: 100vw;
/* padding-top: 3rem ; */
`
const Home = () => {
  const [adata, setData] = useState([])

  const getImg = async () =>{
      const url = `https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=25&rapidapi-key=ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5`
      let data = await fetch(url)
      let parsedData = await data.json()
      setData(parsedData.images)
 }
 
  useEffect(() => {
      getImg();
      
  }, [])
  return (
   <HomeContainer >
   <MovieCarousel />
  
    <TopMovies />
   </HomeContainer>
  )
}

export default Home