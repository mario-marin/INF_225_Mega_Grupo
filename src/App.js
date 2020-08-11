import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Contexto_Salas/pages/HomePage';
import SalasPage from './Contexto_Salas/pages/SalasPage';
import SalasFormPage from './Contexto_Salas/pages/SalasFormPage';

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
