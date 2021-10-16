import React from 'react';
const Card = (props) => {
const {name, flags, cca2, capital } = props.country;

 return (
  <div className='card'>
   <div className='c-img'>
    <img src={flags.svg} alt='' />
   </div>
   <div className='c-text container'>
    <h3>{name.common} ({cca2})</h3>
    <h4>Capital: {capital}</h4>
    <p>{name.official}</p>
   </div>
  </div>
 )

}
export default Card;