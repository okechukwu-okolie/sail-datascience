import React from 'react'
import Nav from './component/nav/Nav'
import Hero from './pages/dataScience/hero/Hero'
import Join from './pages/dataScience/join/Join'
import Learn from './pages/dataScience/learn/Learn'
import WhoThisFor from './pages/dataScience/whoThisFor/WhoThisFor'
import Testimonial from './pages/dataScience/testimonials/Testimonial'
import Apply from './pages/dataScience/apply/Apply'
import Slider2 from './pages/dataScience/slider2/Slider2'

const DataScience = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Join/>
    <Learn/>
    <WhoThisFor/>
    <Testimonial />
    <Apply/>
    {/* <Slider/> */}
    <Slider2/>
    </>
  )
}

export default DataScience