import React from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import "./FooterCss.css";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-text'>
          <p>CopyRight &copy; 2024 Vala Dhruv | All Right Reserved</p>
        </div>

        <div className='footer-iconTop'>
          <Link to="#home"><a><FaRegArrowAltCircleUp/></a></Link>
        </div>
    </div>
  )
}

export default Footer
