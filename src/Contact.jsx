import React, { useEffect, useRef } from 'react'
import "./ContactCss.css";
import emailjs from '@emailjs/browser';
import ScrollReveal from 'scrollreveal'

const Contact = () => {

  useEffect(()=>{

    ScrollReveal({
       distance:'80px',
       duration:2000,
       delay:200,
      });

      
      ScrollReveal().reveal('.contact',{origin:'top'})
  },[]);


  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ghwdrwu', 'template_e8d6imp', form.current, {
        publicKey: '48SKbWZjiyj4b-EV9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Sucessfully Send")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Faild Send")
        },
      );

      e.target.reset();
      
  };

  return (
    <div className='contact' id='contact'>

      <h2 className='heading' >Contact <span>Me</span></h2>

      <form ref={form} onSubmit={(e)=>sendEmail(e)}>
        <div className='input-box'>
          <input type='text' name='user_name' placeholder='Full Name' required/>
          <input type='email' name='user_email'  placeholder='Email Address' required/>
        </div>

        <div className='input-box'>
          <input type='number' name='user_number' placeholder='Contact Numver'/>
          <input type='text' name='subject' placeholder='Email Subject' required/>
        
        </div>

        <textarea name='message'  id='' color='30' rows="10" placeholder='Your Message'  ></textarea>
        <input className='btn' type='submit' value="Send Message"/>
      </form>
    </div>
  )
}

export default Contact
