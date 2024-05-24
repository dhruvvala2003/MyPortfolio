import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutSection from './AboutSection'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>

        <div id='home'>
            <Hero/>
        </div>

        <div id='about'>
            <AboutSection/>
        </div>

        <div id='service'>
          <Projects/>
        </div>

        <div id='contact'>
          <Contact/>
        </div>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default Home
