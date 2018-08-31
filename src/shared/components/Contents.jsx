import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContentsContainer from './ContentsContainer';
import Home from './Home';
import Post from './Post';

const Contents = ({ posts }) => (
  <ContentsContainer>
    <Switch>
      <Route exact path="/" render={() => <Home posts={posts} />} />
      <Route exact path="/posts/:date" render={({ match }) => <Post match={match} posts={posts} />} />
      <Redirect push to="/" />
    </Switch>
  </ContentsContainer>
);

Contents.propTypes = {
  posts: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Contents;
