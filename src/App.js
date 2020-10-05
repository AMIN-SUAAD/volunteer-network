import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './Register';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
    

       <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    {
      loggedInUser.email && <p>Name: {loggedInUser.name}</p>
    }
         
        
       <Router>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path= '/home'>
              <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path= '/register/:activity'>
            <Register></Register>
          </PrivateRoute>
      </Switch>
      </Router>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
