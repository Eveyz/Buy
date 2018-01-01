var React = require('react');
var Home = require("./home.js");
var Dashboard = require('./dashboard.js');

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/books' component={Dashboard}/>
  </Switch>
)

module.exports = Main