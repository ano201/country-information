import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AllCountry from './Components/AllCountry/AllCountry';

function App() {
 return (
  <>
    <Header />
    <Switch>
     <div style={{marginTop:'3rem', marginBottom:'3rem'}}>
      <Route exact path={['/', '/home']} component={Home} />
      <Route exact path='/all-country' component={AllCountry} />
     </div>
    </Switch>
    <Footer />
  </>
 );
}

export default App;