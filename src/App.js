import React from 'react';
import MainView from './Components/MainView.js';
import LoginView from './Components/LoginView.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginView} />
        <Route exact path='/main' component={MainView} />
      </Switch>
    </Router>
  )
}
export default App
