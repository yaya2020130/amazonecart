import React, { useEffect } from 'react';
// import reducer ,{initialState } from './reducer';
// import {StateProvider} from "./StateProvider";
import './App.css';
import './Product.css'
import './Home.css'
import './CheckOut.css'
import './Payment.css'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './Payment.js'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Orders from './Orders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckOut from './CheckOut';
import { useStateValue } from './StateProvider'
import { auth } from './firebase';
const promise = loadStripe('pk_test_51HQzrJGLFK0ZfXETqdSfp5eXQZjS2YHhYhleKWBervHyWqOniDo7E7OdqNtFqCbh7qULCpkFUMvNmkCc6flDKJTx00dsg09ROj')
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/Orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/Login">

            <Login />
          </Route>

          <Route path="/CheckOut">
            <Header />
            <CheckOut />
          </Route>

          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>

          <Route path="/">

            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
