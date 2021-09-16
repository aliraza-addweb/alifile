import React from 'react';
import './App.css';
import Movie from './Components/Movie';
import Contact from './Components/Contact'
import Offer from './Components/Offer'
import { Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Route exact path="/Movie" >
      <Movie />
      </Route>
      <Route path="/Contact">
      <Contact />
      </Route>
      <Route path="/Offer">
      <Offer />
      </Route>
       

      </div>
   
  );
}

export default App;