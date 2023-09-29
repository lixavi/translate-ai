import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (

<>
   <section className='footer-color pt-5 pb-5 shadow-lg mt-5'> 

    <div className='footer-section mt-5'>
      <div className='footer-part'>
        <h3 className='footer-logo'>AUCIS</h3>
        <p>AUCIS, another great initiative by Air University. Its a platform for all those students who intend to show their talent & prove their skills in computer science & technology.
We are here to appreciate their efforts, enhance their knowledge and polish their abilities. Whether you have expertise in this domain or a beginner, you will always find AUCIS as a learning platform.</p>
      </div>
      
      <div className=' footer-part'>
       <h3>Services</h3>
       <p>Full Stack Developer</p>
       <p>Graphic Designing</p>
       <p>Mobile App Developer</p>
       <p>React Developers</p>
       
      </div>

      <div className='footer-part'>
       <h3>Quick Links </h3>
      <p> <a href='/' className='quick-links'>Home</a></p> 
      <p  className='mt-1'> <a href='#services'>Services</a> </p>
     <p className='mt-1'>  <a href='#portfolio'>Porfolio</a> </p>
      {/* <p> <Link to="/about">About Us </Link></p> */}
       {/* <p className='mt-1'>Gallery</p> */}
      </div>

       <div className='footer-part'>
       <h3>Contact Us</h3>
       <p>aucis@gmail.com</p>
       <p>+92-3121-1212</p>
       
       <form>
          <ul class="list-unstyled d-flex icon-f">
        <li class="ms-3"><a class="text-white " href="/#"><AiOutlineTwitter className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="https://www.linkedin.com/company/cyberoide-tech/"><AiFillLinkedin className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsFacebook className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsInstagram className='icon'/></a></li>
      </ul>
        </form>
      </div>
    </div>
   </section>

   <section className='bg-dark pt-4 pb-4'>
   <p class="text-center text-light">© 2023 AUCIS. All rights reserved.</p>
   </section>
   </>
  )
}

export default Footer