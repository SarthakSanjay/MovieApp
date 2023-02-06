import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'

const HomeContainer = styled.div`
background-color: #000000;
height: 100vh;
width: 100vw;
`
const Home = () => {
  return (
   <HomeContainer>
    <Carousel />
   </HomeContainer>
  )
}

export default Home