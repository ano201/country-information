import React from 'react';
import { Link } from 'react-router-dom';
import world from '../../images/world.png';
const Home = () => {


 return (
  <>
   <div className='container'>
    <h1>Welcome</h1>
    <h3 style={{marginTop:'-2rem'}}>To Country Info...</h3>
    <div className='container'>
     <img src={world} width='100%' alt='' />
    </div>
    <div>
     <h4 style={{fontWeight:'bolder'}}>Each Country Profile provides information on:</h4>
     <p>Geography Maps Flag History Current ruler Area Population Capital Largest cities Languages Ethnicity / race Religion.</p>
    </div>
    <div>
     <h4>Start your journey with us...</h4>
     <Link className='btn' to='/all-country'>Get Started</Link>
    </div>
    <div>
     <h4>How many countries are there in the world?</h4>
     <p>Since South Sudan became an independent state on 9 July 2011, there are now 195 independent sovereign nations in the world (not including the disputed but de facto independent Taiwan), plus some 60 dependent areas, and several disputed territories, like Kosovo.</p>
     <p>193 sovereign states are members of the United Nations and are equally represented in the UN General Assembly. Two non-member countries have permanent observer states: the Holy See and the State of Palestine.</p>
     <p>Each country profile provides links to official web sites of a nation/territory, information on geography, maps, the national flag, history, culture, tourist destinations, its population and languages, the capital and the largest cities, education, economy, newspapers, and much more.</p>
     <h3>Search your favorite country and discover.</h3>
     <Link className='btn' to='/searching-country'>Search Now</Link>
    </div>
   </div> <
  />
 )

}
export default Home;