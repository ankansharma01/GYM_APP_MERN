import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    
    
   
       <div className="contact">
       <div className="about-us">
      <h2>About Us</h2>
      <p>
        At Fitness in Maheshtala, we are committed to helping you achieve your fitness goals. 
        Our state-of-the-art facilities provide everything you need for a comprehensive workout.
      </p>
      <p>
        With highly trained staff and personalized training programs, we ensure the best experience for all members.
      </p>
      <p>
        Whether you are just starting out or are a seasoned athlete, we have something for everyone. 
      </p>
      <p>
        Join us today and take the first step towards a healthier, stronger you.
      </p>
    </div>
       <h2 style={{color:'#6EC207', fontSize: "2.2em" , cursor:'pointer'}}>Contact Us</h2>
       <br/>
       <div style={{display:'flex' , gap:'1em'}}>
       <a 
        href="https://facebook.com/yourpage" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <FaFacebookF size={24} />
      </a>
      <br/>

      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-green-600 hover:text-green-800 transition-colors duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
      <br/>

      <a 
        href="https://instagram.com/yourpage" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
      >
        <FaInstagram size={24} />
      </a>
       </div>
      
    </div>
    </>
   
  );
};

export default Contact;
