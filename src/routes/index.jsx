import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Post from '../components/Post';
import posts from '../assets/posts';

const validatePost = (nextState, replace) => {
    if (!posts[nextState.params.date]) {
        replace('/');
    }
};

const routes = (
    <Route
        path="/"
        component={ App }
    >
        <Route
            path="posts/:date"
            component={ Post }
            onEnter={ validatePost }
        />
        <IndexRoute component={ Home } />
        <Redirect
            from="*"
            to="/"
        />
    </Route>
);

export default routes;
