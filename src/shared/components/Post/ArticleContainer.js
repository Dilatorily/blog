import styled from '@emotion/styled';
import {
  DARK_BLUE,
  DARK_GREEN,
  DARK_GREY,
  DARK_TEAL,
  DARKER_BLUE,
  LIGHT_BLUE,
  LIGHT_GREEN,
  LIGHT_GREY,
  LIGHT_RED,
  LIGHT_TEAL,
  NEUTRAL_GREY,
  PURPLE,
  RED,
} from '../../constants/style';

const ArticleContainer = styled.div`
  & p, & ul, & ol, & table {
    font-weight: 200;
  }

  & h1, & h2, & h3, & h4, & h5, & h6, & strong, & th {
    font-weight: 600;
  }

  & p {
    font-size: 18px;
  }

  & code {
    font-family: Roboto Mono, monospace;
    font-weight: normal;
  }

  & img {
    max-width: 100%;
  }

  & a {
    font-weight: 500;
    color: ${RED};
    text-decoration: none;
    transition: 0.25s ease-in-out;
  }

  & a:hover {
    color: ${LIGHT_BLUE};
  }

  & pre {
    padding: 15px;
    overflow-x: auto;
    background-color: ${LIGHT_GREY};
  }

  & blockquote {
    margin: 0;
    padding: 5px 40px;
    border-left: 3px solid ${RED};
    background-color: ${LIGHT_GREY};
  }

  & blockquote p {
    margin: 0;
  }

  & table {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }

  & table thead {
    background-color: ${LIGHT_GREY};
  }

  & table thead th {
    padding: 5px 10px;
    border-bottom: 3px solid ${RED};
    text-align: left;
  }

  & table tbody tr:nth-child(even) {
    background-color: ${LIGHT_GREY};
  }

  & table tbody td {
    padding: 5px 10px;
  }

  & hr {
    border-top: 3px dotted ${RED};
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin: 30px 30%;
  }

  & .hljs-comment, & .hljs-quote {
    color: ${NEUTRAL_GREY};
    font-style: italic;
  }

  & .hljs-keyword, & .hljs-selector-tag, & .hljs-subst {
    color: ${DARK_GREY};
    font-weight: bold;
  }

  & .hljs-number, & .hljs-literal, & .hljs-variable, & .hljs-template-variable, & .hljs-tag .hljs-attr {
    color: ${DARK_TEAL};
  }

  & .hljs-string, & .hljs-doctag {
    color: ${RED};
  }

  & .hljs-title, & .hljs-section, & .hljs-selector-id {
    color: ${PURPLE};
    font-weight: bold;
  }

  & .hljs-subst {
    font-weight: normal;
  }

  & .hljs-type, & .hljs-class .hljs-title {
    color: ${DARK_BLUE};
    font-weight: bold;
  }

  & .hljs-tag, & .hljs-name, & .hljs-attribute {
    color: ${DARKER_BLUE};
    font-weight: normal;
  }

  & .hljs-regexp, & .hljs-link {
    color: ${DARK_GREEN};
  }

  & .hljs-symbol, & .hljs-bullet {
    color: ${PURPLE};
  }

  & .hljs-built_in, & .hljs-builtin-name {
    color: ${LIGHT_TEAL};
  }

  & .hljs-meta {
    color: ${NEUTRAL_GREY};
    font-weight: bold;
  }

  & .hljs-deletion {
    background: ${LIGHT_RED};
  }

  & .hljs-addition {
    background: ${LIGHT_GREEN};
  }

  & .hljs-emphasis {
    font-style: italic;
  }

  & .hljs-strong {
    font-weight: bold;
  }
`;

export default ArticleContainer;
