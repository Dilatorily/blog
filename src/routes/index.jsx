import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Post from '../components/Post';

const routes = (
    <Route
        path="/"
        component={ App }
    >
        <Route
            path="posts/:date"
            component={ Post }
        />
        <IndexRoute component={ Home } />
        <Redirect
            from="*"
            to="/"
        />
    </Route>
);

export default routes;
