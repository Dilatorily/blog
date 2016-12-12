import React from 'react'; // eslint-disable-line
import { StyleRoot } from 'radium';
import { Router, browserHistory } from 'react-router';
import routes from '../../shared/routes';

const Root = () => (
  <StyleRoot>
    <Router history={browserHistory} routes={routes} />
  </StyleRoot>
);

export default Root;
