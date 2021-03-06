import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';
import Contact from './Components/Contact/Contact';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    
    <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route  path="/home/:idLeague">
           <LeagueDetail></LeagueDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
          <h2>OOOps the page not found.</h2>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
