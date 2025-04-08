import React from 'react'
import Slider from '../common/Slider'
import About from '../common/About';
import Products from '../common/Products';
import News from '../common/News';
import Partners from '../common/Partners';
import Ad from '../common/Ad';
import Map from '../common/Map';
import Projects from '../common/Projects';

const Home = () => {

  return (
    <>
      <Slider/>
      <About/>
      {/* <Ad/> */}
      <Products/>
      <News/>
      <Projects/>
      <Partners/>
      <Map/>
    </>
  )
}

export default Home
