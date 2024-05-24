import React, { useEffect } from 'react'
import img3 from './Images/img3.jpg';
import "./AboutSectionCss.css";
import { FaCode } from "react-icons/fa";
import ScrollReveal from 'scrollreveal'

const AboutSection = () => {

  // scroll-revel web
  useEffect(()=>{

    ScrollReveal({
       distance:'80px',
       duration:2000,
       delay:200,
      });

      ScrollReveal().reveal('.about',{origin:'left'})

      ScrollReveal().reveal('.service',{origin:'right'})
  },[]);


  return (
    <>
    <div className='about' id='about'>

      <div className='about-img'>
        <img src={img3} alt='About Image' />
      </div>

      <div className='about-content'>
        <h2 className='heading'>  
          About <span>Me</span>
        </h2>

        <h3>I'm a <span>Web Devloper </span></h3>

          <p>Hi there! I'm Dhruv, a recent Pursuing B.Tech -IT degree from DDU(Dharm Sing Desai University). I'm passionate about web development and eager to kick-start my career in the tech industry.</p>

         <a href='https://drive.google.com/file/d/1BNHFD-aSQM7q0jZm5qdZ4EaoFVz_mPs9/view?usp=drivesdk' className='btn'>Rede More</a>
      </div>


     
    </div>

     {/* ................services............. */}

     <section className='service' id='service'>

        <h2 className='heading'>My <span>service</span></h2>

        <div className='service-container'>

            <div className='service-box'>
                <span className='para'><FaCode/></span>
                <h3>Frontend Web Devlopment</h3>
                <p>Good in frontend development, leveraging React to craft dynamic and responsive user interfaces.</p>
                <a href='https://github.com/dhruvvala2003' className='btn1'>Read More</a>
            </div>

            <div className='service-box'>
                <span  className='para'><FaCode/></span>
                <h3>Backend-Devlopment</h3>
                <p> Proficient in backend development using Spring-Boot & Node.js, ensuring scalable server-side sol.</p>
                <a href='https://github.com/dhruvvala2003' className='btn1'>Read More</a>
            </div>


            <div className='service-box'>
                <span  className='para'><FaCode/></span>
                <h3>Java Devlopment</h3>
                <p> Experienced Java Developer proficient in JDBC, Spring Boot, JSP, and Core Java. Skilled in Advanced Java Collections Framework for efficient data management</p>
                <a href='https://github.com/dhruvvala2003' className='btn1'>Read More</a>
            </div>



        </div>

    </section>


    </>
  )
}

export default AboutSection
