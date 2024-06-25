import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  

  return (
    <>
     <div className="container contact" id="contact">
     <h1>CONTACT ME</h1>
      <div className="contact-icon"
       
       data-aos="zoom-in-up"
       data-aos-duration="2000"
       
       >
         <a href="https://www.google.com" target="_blank" className="items">
          <FaSquareInstagram className="icons"/>
         </a>
         <a href="https://www.google.com" target="_blank" className="items">
          <CiFacebook className="icons"/>
         </a>
         <a href="https://www.google.com" target="_blank" className="items">
          <FaLinkedin className="icons"/>
         </a>
         <a href="https://www.google.com" target="_blank" className="items">
          <FaSquareXTwitter className="icons"/>
         </a>
         <a href="https://www.github.com" target="_blank" className="items">
          <FaGithub className="icons"/>
         </a>
         <a href="mailto:saketkumarjhabdps@gmail.com" target="_blank" className="items">
          <SiGmail className="icons"/>
         </a> 
      </div>
     </div>
    </>
  )
}

export default Contact
