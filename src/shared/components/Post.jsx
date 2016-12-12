import React from 'react';
import { Style } from 'radium';
import format from 'date-fns/format';

import {
  LIGHT_RED,
  RED,
  LIGHT_BLUE,
  DARK_BLUE,
  DARKER_BLUE,
  LIGHT_TEAL,
  DARK_TEAL,
  LIGHT_GREEN,
  DARK_GREEN,
  PURPLE,
  LIGHT_GREY,
  NEUTRAL_GREY,
  DARK_GREY,
} from '../constants/style';
import posts from '../assets/posts';

const styles = {
  date: {
    fontSize: 16,
    fontStyle: 'italic',
    color: RED,
  },
  post: {
    'p, ul, ol, table': {
      fontWeight: 200,
    },
    'h1, h2, h3, h4, h5, h6, strong, th': {
      fontWeight: 600,
    },
    p: {
      fontSize: 18,
    },
    code: {
      fontFamily: 'Roboto Mono, monospace',
      fontWeight: 'normal',
    },
    img: {
      maxWidth: '100%',
    },
    a: {
      fontWeight: 500,
      color: RED,
      textDecoration: 'none',
      transition: '0.25s ease-in-out',
    },
    'a:hover': {
      color: LIGHT_BLUE,
    },
    pre: {
      padding: 15,
      overflowX: 'auto',
      backgroundColor: LIGHT_GREY,
    },
    blockquote: {
      margin: 0,
      padding: '5px 40px',
      borderLeft: `3px solid ${RED}`,
      backgroundColor: LIGHT_GREY,
    },
    'blockquote p': {
      margin: 0,
    },
    table: {
      display: 'block',
      maxWidth: '100%',
      overflowX: 'auto',
      borderCollapse: 'collapse',
    },
    'table thead': {
      backgroundColor: LIGHT_GREY,
    },
    'table thead th': {
      padding: '5px 10px',
      borderBottom: `3px solid ${RED}`,
      textAlign: 'left',
    },
    'table tbody tr:nth-child(even)': {
      backgroundColor: LIGHT_GREY,
    },
    'table tbody td': {
      padding: '5px 10px',
    },
    hr: {
      borderTop: `3px dotted ${RED}`,
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      margin: '30px 30%',
    },
    '.hljs-comment, .hljs-quote': {
      color: NEUTRAL_GREY,
      fontStyle: 'italic',
    },
    '.hljs-keyword, .hljs-selector-tag, .hljs-subst': {
      color: DARK_GREY,
      fontWeight: 'bold',
    },
    '.hljs-number, .hljs-literal, .hljs-variable, .hljs-template-variable': {
      color: DARK_TEAL,
    },
    '.hljs-tag .hljs-attr': {
      color: DARK_TEAL,
    },
    '.hljs-string, .hljs-doctag': {
      color: RED,
    },
    '.hljs-title, .hljs-section, .hljs-selector-id': {
      color: PURPLE,
      fontWeight: 'bold',
    },
    '.hljs-subst': {
      fontWeight: 'normal',
    },
    '.hljs-type, .hljs-class .hljs-title': {
      color: DARK_BLUE,
      fontWeight: 'bold',
    },
    '.hljs-tag, .hljs-name, .hljs-attribute': {
      color: DARKER_BLUE,
      fontWeight: 'normal',
    },
    '.hljs-regexp, .hljs-link': {
      color: DARK_GREEN,
    },
    '.hljs-symbol, .hljs-bullet': {
      color: PURPLE,
    },
    '.hljs-built_in, .hljs-builtin-name': {
      color: LIGHT_TEAL,
    },
    '.hljs-meta': {
      color: NEUTRAL_GREY,
      fontWeight: 'bold',
    },
    '.hljs-deletion': {
      background: LIGHT_RED,
    },
    '.hljs-addition': {
      background: LIGHT_GREEN,
    },
    '.hljs-emphasis': {
      fontStyle: 'italic',
    },
    '.hljs-strong': {
      fontWeight: 'bold',
    },
  },
  blockquote: {
    p: {
      margin: 0,
    },
  },
};

const Post = (prop) => {
  const { params: { date } } = prop;
  const markup = { __html: posts[date] };

  return (
    <div>
      <div style={styles.date}>{format(date, 'dddd, MMMM Do, YYYY')}</div>
      {/* eslint-disable react/no-danger */}
      <div className="post" dangerouslySetInnerHTML={markup} />
      {/* eslint-enable react/no-danger */}
      <Style scopeSelector=".post" rules={styles.post} />
    </div>
  );
};

Post.propTypes = {
  params: React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
