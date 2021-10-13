import React from 'react';
//import { Link } from 'react-router-dom';
import fb from '../../images/getTouch/Facebook.svg';
import insta from '../../images/getTouch/Instagram.svg';
import twit from '../../images/getTouch/Twitter.svg';
import linkedin from '../../images/getTouch/LinkedIN.svg';
import git from '../../images/getTouch/Github.svg';


const Footer = () => {


 return (
  <div className='footer'>
   <div className='container'>
    <h3 className='txt-center'>GET IN TOUCH</h3>
    <div className='getTouch'>
     <div>
      <a target='_blank' rel='noreferrer' href={'https://www.facebook.com/murad.hossain201'}><img src={fb} alt='' /></a>
     </div>
     <div>
      <a target='_blank' rel='noreferrer' href={'https://instagram.com/somudrobilas'}><img src={insta} alt='' /></a>
     </div>
     <div>
      <a target='_blank' rel='noreferrer' href={'http://twitter.com/muradmt201'}><img src={twit} alt='' /></a>
     </div>
     <div>
      <a target='_blank' rel='noreferrer' href={'https://github.com/ano201'}><img src={git} alt='' /></a>
     </div>
     <div>
      <a target='_blank' rel='noreferrer' href={'https://www.linkedin.com/in/murad-hossain-723242215'}><img src={linkedin} alt='' /></a>
     </div>
    </div>
   </div>
  </div>
 )

}
export default Footer;