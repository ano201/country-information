import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {


 return (
  <div className='header container'>
   <nav>
     <Link to='./home'>Home</Link>
     <Link to='./opinion'>Opinion</Link>
     <Link to='./about-us'>About Us</Link>
     <Link to='./contact-us'>Contact Us</Link>
   </nav>
  </div>
 )

}
export default Header;