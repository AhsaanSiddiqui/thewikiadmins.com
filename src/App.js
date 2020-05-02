import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import About from './pages/AboutUs'
import Contact from './pages/ContactUs'

import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Header';




function App() {
  return (
   <>
    <Navbar />
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/about-us" >
        <About />
      </Route>
      <Route exact path="/contact-us" >
        <Contact />
      </Route>
    </Switch>
    
    

   </>
  );
}

export default App;
