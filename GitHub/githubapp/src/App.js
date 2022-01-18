
import React from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Naavbar from './Components/navbar/navbar.jsx';
import listOfMovies from './Components/PresentFilms/listOfMovies'
import Form from './Components/Form/Form'
import {LanguageProvider}from './Context/Context'
import {useState} from 'react'


function App() {
  const [lang,setLang]=useState("en")
  return (
  
    <Router>
      <LanguageProvider value={{lang,setLang}}>
       <Naavbar/>
      <Switch>
      <Route path="/Movies" exact component={listOfMovies}></Route>
      <Route path="/Form" exact component={Form}/>
   </Switch>
   </LanguageProvider>
  </Router>
  
    
  );
}

export default App;
