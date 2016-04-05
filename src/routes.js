import React from 'react';
import { IndexRoute, Route, Router, hashHistory, Link } from 'react-router';
import App from './components/App';
import ContactDetails from './components/ContactDetails';

let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ContactDetails}/>
      <Route path="user/:id" component={ContactDetails}/>
    </Route>
  </Router>
);

export default routes ;
