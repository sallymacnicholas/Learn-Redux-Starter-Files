import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Main';
import PhotoGrid from './components/Main';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}></Route>
    <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
  </Router>
)
render(router, document.getElementById('root'));
