import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height: 60vh;
width: 100vw;
margin: 0;
padding: 0;
background-color: palegreen;
border: 2px solid black;
`
const MovieSlider = () => {
  return (
    <Container>
        <div className='heading'>
            <h1>Top Movies</h1>
            <p>Top movies of 2023</p>
        </div>
    </Container>
  )
}

export default MovieSlider