import React, { useEffect } from 'react'
import "./HeroCss.css";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import img4 from './Images/img5.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollReveal from 'scrollreveal'
import Typed from 'typed.js';

const Hero = () => {
 
   
//->>>  https://github.com/mattboldt/typed.js/
    useEffect(() => {

        const tmp=document.querySelector('.multi-text');

        const typed = new Typed(tmp, {
          strings: ['Frontend-Devloper', 'Backend-Devloper','Gammer'],
          typeSpeed: 60,
            backSpeed:60,
            backDelay:1000,
            loop:true,
        });

          ScrollReveal({
             distance:'80px',
             duration:2000,
             delay:200,
            });
      
            ScrollReveal().reveal('.hero-content',{origin:'top'})
    

        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);


    return (
        <div className='hero' id='hero'>

            <div className='hero-content'>
                <h3>Hi, Myself</h3>
                <h1>Vala <span>Dhruv</span></h1>
                <h3 >And I'm a <span  className='multi-text'></span> </h3>
                <p>I am Final Year Ddu's Student. Persuing B.Tech-IT Degree & Eager To Work In Full-stack Devlopment Projects </p>
           
                <div className="social-media">

                <a href='https://www.instagram.com/i_am_vala_dhruv?igsh=MTBsc3c0a2czOWdkYw=='><FaInstagram /> </a> {/* insta gram */}
                <a href='https://www.linkedin.com/in/dhruv-vala-44526224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin /></a>{/* link din  */}
                <a href='https://github.com/dhruvvala2003'><FaGithub /></a>{/* git hub  */}

                </div>

              <Link smooth to="#contact"> <a href='' className='btn'>Hire Me</a></Link> 
           
            </div>

            <div className='hero-img'>
                <img src={img4} alt='Profile Image'/>
            </div>
        </div>
    )
}

export default Hero
