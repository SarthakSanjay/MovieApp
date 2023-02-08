import React from 'react'
import MovieCarousel from './components/MovieCarousel';
import MovieSlider from './components/MovieSlider';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" >
     <Navbar />
     <MovieCarousel />
     <MovieSlider />

    </div>
  );
}



export default App;
