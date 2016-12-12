import React from 'react';
import { Style } from 'radium';
import { Link } from 'react-router';
import format from 'date-fns/format';

import { RED, LIGHT_BLUE, DARK_GREY, LIGHT_GREY } from '../constants/style';
import { getContentFromFirstTag } from '../utils';

const styles = {
  homePost: {
    h3: {
      color: RED,
    },
    ':hover h2, :hover h3': {
      color: LIGHT_BLUE,
    },
  },
  post: {
    paddingBottom: 20,
    marginBottom: 20,
    borderBottom: `1px solid ${LIGHT_GREY}`,
  },
  link: {
    color: DARK_GREY,
    textDecoration: 'none',
  },
  article: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 'calc(100% - 200px)',
  },
  title: {
    margin: '0 0 10px',
    fontSize: 32,
    fontWeight: 600,
    transition: '0.25s ease-in-out',
  },
  description: {
    margin: 0,
    fontSize: 18,
    fontWeight: 200,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  date: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 200,
    margin: 0,
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'italic',
    textAlign: 'right',
    transition: '0.25s ease-in-out',
  },
};

const HomePost = prop => (
  <li className="home-post" style={styles.post}>
    <Link style={styles.link} to={`/posts/${prop.date}`}>
      <div style={styles.article}>
        <h2 style={styles.title}>
          {getContentFromFirstTag(prop.post, 'h1')}
        </h2>
        <p style={styles.description}>{getContentFromFirstTag(prop.post, 'p')}</p>
      </div>
      <h3 style={styles.date}>
        {format(new Date(prop.date), 'MMMM Do, YYYY')}
      </h3>
    </Link>
    <Style scopeSelector=".home-post" rules={styles.homePost} />
  </li>
);

HomePost.propTypes = {
  post: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
};

export default HomePost;
