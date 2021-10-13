import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
 return (
  <>
    <Header />
    <Switch>
     <Route exact path={['/', '/home']} component={Home} />
    </Switch>
    <Footer />
  </>
 );
}

export default App;