import React from 'react';
import './Home.css';
import Nav from '../component/NavBar/Nav';
import Body from '../component/body_stuffs/Body';

const Home = () => {
  return (
    <div className='home'>
        <div className='top' >
      <Nav /></div>

      <div className='header'>
        <Body />
        
      </div>
    </div>

    
  )
}

export default Home
