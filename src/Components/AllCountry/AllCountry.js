import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';


const AllCountry = () => {
const [countries, setCountries] = useState([]);
useEffect(()=>{
 fetch('https://restcountries.com/v3.1/all')
 .then(res => res.json())
 .then(data => setCountries(data))
},[])

 return (
  <div className='container'>
   <h2>All Countries</h2>
   <div className='country-container'>
    {
     countries.map(country => <Card country={country} />)
    }
   </div>
  </div>
 )

}
export default AllCountry;