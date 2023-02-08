import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  font-size:16px;
  height:60px;
  color:white;
  letter-spacing:0.5px;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  /* position: fixed; */
  z-index: 1;
  line-height: 14px;


  h1{
    padding:5px 10px;
    background-color: #e2b616;
    display: inline-block;
    align-items: center;
    border-radius: 10px;
    margin:10px auto;
    color: #121212;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;

    
  }
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  margin:0px auto;
  `;

const NavbarLink = styled.li`
  margin: 0 10px;
 
 a{
    text-decoration: none;
    color:#70bde9;
 }
`;

const Search = styled.div`
padding:0px 10px;
margin:0px auto;
/* border: 2px solid white; */
display: flex;
align-items: center;
justify-content: center;

input{
    width:50vw;
    height:25px;
    border:none ;
    border-radius:0px 5px 5px 0px;
    outline: none;
}
button{
    height:25px;
    border:none ;
    border-radius:5px 0px 0px 5px;
    padding: 7px;
    background-color: white;
    border-right:1px solid black;
  
}


`
const Navbar = () => (
  <NavbarContainer>
    <h1>Movies-Info</h1>
    <Search>
        <button>All</button>
        <input  placeholder='  search movies ,series , actors' />

    </Search>
    <NavbarLinks>
      <NavbarLink><a href="#">Home</a></NavbarLink>
      <NavbarLink><a href="#">About</a></NavbarLink>
      <NavbarLink><a href="#">Contact</a></NavbarLink>
    </NavbarLinks>
  </NavbarContainer>
);

export default Navbar;
