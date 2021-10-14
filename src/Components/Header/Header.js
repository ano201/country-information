import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../images/menu.png';


const Header = () => {


 return (
  <div className='header container'>
   <div className='nav-container'>
    <div>
     <img alt='' src={menu} className='menu'/>
    </div>
    <nav>
      <Link to='./home'>Home</Link>
      <Link to='./opinion'>Opinion</Link>
      <Link to='./about-us'>About Us</Link>
      <Link to='./contact-us'>Contact Us</Link>
    </nav>
    <div>
     <img alt='' src={menu} className='favourite' />
    </div>
   </div>
  </div>
 )

}
export default Header;