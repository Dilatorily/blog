import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Post from '../components/Post';

const routes = (
    <Route>
        <Route
            path="/"
            component={ App }
        >
            <IndexRoute component={ Home } />
            <Route
                path="posts/:date"
                component={ Post }
            />
        </Route>
        <Route path="*">
            <IndexRedirect to="/" />
        </Route>
    </Route>
);

export default routes;
