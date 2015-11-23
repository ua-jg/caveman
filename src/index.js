import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, IndexRoute, Route, Link, IndexLink } from 'react-router';

import VenueList from './components/VenueList';
import Venue from './components/Venue';
import App from './components/App';

const routes = (
  <Router>
    <Route path="/" handler={App}>
      <Route path="venues" component={VenueList}/>
      <Route path="venue/:id" component={Venue}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
