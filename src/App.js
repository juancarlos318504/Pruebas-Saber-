import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  //BrowserRouter as Router,
  Route,
  Switch,
  HashRouter as Router,
  Link
} from "react-router-dom";

import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';
import Camera from './Views/Camera';
import Start from './Views/Start';
import Ranking from './Views/Ranking';
import LevelPresentation from './Views/LevelPresentation';
import Question from './Views/Question';

class App extends Component {

  constructor(){
    super(); 
    this.state={

    }
  }

  render(){
    return (
      <Router>
        <div className="App">
        
        
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ingreso" component={Login}/>
              <Route exact path="/registro" component={Register}/>
              <Route exact path="/camara" component={Camera}/>
              <Route exact path="/inicio" component={Start}/>
              <Route exact path="/ranking" component={Ranking}/>
              <Route exact path="/nivel" component={LevelPresentation}/>
              <Route exact path="/pregunta" component={Question}/>
          </Switch>
        </div>
    </Router>
      
    );
  }
  
}

export default App;
