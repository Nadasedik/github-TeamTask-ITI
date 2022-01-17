
import React from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Naavbar from './Components/navbar/navbar.jsx';
import listOfMovies from './Components/PresentFilms/listOfMovies'





function App() {
  return (
  
    <Router>
       <Naavbar/>
      <Switch>
      <Route path="/Movies" exact component={listOfMovies}></Route>

   </Switch>
  </Router>
  
    
  );
}

export default App;
