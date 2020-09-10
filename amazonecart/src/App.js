import React from 'react';
// import reducer ,{initialState } from './reducer';
// import {StateProvider} from "./StateProvider";
import './App.css';
import './Product.css'
import './Home.css'
import './CheckOut.css'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckOut from './CheckOut';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Login">

            <Login />
          </Route>
          <Route path="/CheckOut">

            <CheckOut />
          </Route>
          <Route path="/">

            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
