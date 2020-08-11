import React from 'react';
import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import './assets/images/icons/favicon.png';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css';
import './assets/fonts/iconic/css/material-design-iconic-font.min.css';
import './assets/vendor/animate/animate.css';
import './assets/vendor/css-hamburgers/hamburgers.min.css';
import './assets/vendor/animsition/css/animsition.min.css';
import './assets/css/util.min.css';
import './assets/css/main.css';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';


import Home from "./views/home";
import Detail from "./views/detail";
import BlogGrid from "./views/blog-grid";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
    {/* <StoreProvide> */}
      <Switch>
        <Route path='/' exact name='home' component={Home} />
        <Route path='/detail' exact name='detail' component={Detail} />
        <Route path='/blog-grid' exact name='blog' component={BlogGrid} />
        {/* <RoutePrivate path="/admin" name="Admin" component={RoutePrivate} /> 
        <RoutePrivate path="/suporte" name="Suporte" component={RoutePrivate} />  */}
      </Switch>
    {/* </StoreProvide> */}
  </Router>
  );
}

export default App;
