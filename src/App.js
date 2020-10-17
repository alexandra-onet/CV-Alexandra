import React, { Component } from "react";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePAge/HomePage'
import Aboutme from './Components/Header/Aboutme';
import Contact from './Components/Header/ContanctPart';
import Myskills from './Components/Header/myskills';
import Header from './Components/Header/HeaderPart';
import Footer from './Components/Footer/footerpart';


class App extends Component {
render(){
  return (
    <div className='App'>
      <Router>
        <React.Fragment>
          <Header />
          <div className='App-body'>
            <Route exact path='/' component={HomePage}/>
        <Switch>
        <Route exact path='/Aboutme' component={Aboutme}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/Myskills' component={Myskills}/>
        </Switch>
        </div>
        <Footer />
        </React.Fragment>
      </Router>
    </div>
);
}
}
export default App;