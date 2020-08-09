import React from 'react';
import './App.css';
import Nav from "./Nav";
import Contexto from "./Contexto";
import Personal from "./Contexto_Equipo/Personal";
import NewPersonal from "./Contexto_Equipo/NewPersonal";
import EditPersonal from "./Contexto_Equipo/EditPersonal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {MainEquipamiento} from './Contexto_Equipamiento/Main_view_equipamiento';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contexto" component={Contexto} />
          <Route path="/personal" component={Personal} />
          <Route path="/new_personal" component={NewPersonal} />
          <Route path="/edit_personal/:id" component={EditPersonal} />
          <Route path="/equipamiento" component={MainEquipamiento} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Inicio</h1>
  </div>
)

export default App;
