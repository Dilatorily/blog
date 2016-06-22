import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Main from '../components/Main';
import Test from '../components/Test';

const routes = (
    <Route
        path="/"
        component={ App }
    >
        <IndexRoute component={ Main } />
        <Route
            path="test"
            component={ Test }
        />
    </Route>
);

export default routes;
