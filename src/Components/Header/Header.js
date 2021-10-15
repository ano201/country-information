import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../images/menu.png';


const Header = () => {

const styles = {
 menu: 0,
 closeMenu: '-70%',
 fav: 0,
 closeFav: '-70%',
 rotateIcon: 'rotateY(180deg)',
 icon: 'rotateY(0deg)'
}

const [menuRotate, setMenuRotate] = useState();
const [favRotate,setFavRotate] = useState();

const [menuStyle, setMenuStyle] = useState();
const styleMenu = ()=> {
 switch (menuStyle) {
  case styles.menu:
   setMenuStyle(styles.closeMenu)
   setMenuRotate(styles.rotateIcon)
   break;
  default:
  setMenuStyle(styles.menu)
  setMenuRotate(styles.icon)
 }
};

const [favStyle, setFavStyle] = useState();
const styleFav = () => {
 switch (favStyle) {
  case styles.fav:
   setFavStyle(styles.closeFav)
   setFavRotate(styles.icon)
   break;
  default:
   setFavStyle(styles.fav)
   setFavRotate(styles.rotateIcon)
 }
};

 return (
  <div className='header container'>
   <div className='nav-container'>
    <div>
     <img alt='' onClick={styleMenu} style={{transform: menuRotate}} src={menu} className='menu'/>
    </div>
    <nav>
      <Link to='./home'>Home</Link>
      <Link to='./opinion'>Opinion</Link>
      <Link to='./about-us'>About Us</Link>
      <Link to='./contact-us'>Contact Us</Link>
    </nav>
    <div>
     <img alt='' onClick={styleFav} style={{transform: favRotate}} src={menu} className='favourite' />
    </div>
   </div>
   <div className='after-nav'>
    <div className='menu-container' style={{left:menuStyle}}>
     
    </div>
    <div className='fav-container' style={{right:favStyle}}>
    
    </div>
   </div>
  </div>
 )

}
export default Header;