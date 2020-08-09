import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import SalasPage from './pages/SalasPage';
import SalasFormPage from './pages/SalasFormPage';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/salas" component={SalasPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/salasForm" component={SalasFormPage}></Route>
      </Switch>
    </Router>
  )
}

export default App;
