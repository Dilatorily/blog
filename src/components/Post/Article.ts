import { styled } from '@linaria/react';
import { Color } from '../../constants';

const Article = styled.article`
  & p,
  & ul,
  & ol,
  & table {
    font-weight: 200;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & strong,
  & th {
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
    color: ${Color.Red};
    text-decoration: none;
    transition: 0.25s ease-in-out, outline 0s, outline-offset 0s;

    &:focus,
    &:hover {
      color: ${Color.LightBlue};
    }

    &:focus {
      outline: 2px solid ${Color.Red};
      outline-offset: 1px;
    }
  }

  & pre {
    padding: 15px;
    overflow-x: auto;
    background-color: ${Color.LightGrey};
  }

  & blockquote {
    margin: 0;
    padding: 5px 40px;
    border-left: 3px solid ${Color.Red};
    background-color: ${Color.LightGrey};
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
    background-color: ${Color.LightGrey};
  }

  & table thead th {
    padding: 5px 10px;
    border-bottom: 3px solid ${Color.Red};
    text-align: left;
  }

  & table tbody tr:nth-child(even) {
    background-color: ${Color.LightGrey};
  }

  & table tbody td {
    padding: 5px 10px;
  }

  & hr {
    border-top: 3px dotted ${Color.Red};
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin: 30px 30%;
  }

  & .hljs-comment,
  & .hljs-quote {
    color: ${Color.NeutralGrey};
    font-style: italic;
  }

  & .hljs-keyword,
  & .hljs-selector-tag,
  & .hljs-subst {
    color: ${Color.DarkGrey};
    font-weight: bold;
  }

  & .hljs-number,
  & .hljs-literal,
  & .hljs-variable,
  & .hljs-template-variable,
  & .hljs-tag .hljs-attr {
    color: ${Color.DarkTeal};
  }

  & .hljs-string,
  & .hljs-doctag {
    color: ${Color.Red};
  }

  & .hljs-title,
  & .hljs-section,
  & .hljs-selector-id {
    color: ${Color.Purple};
    font-weight: bold;
  }

  & .hljs-subst {
    font-weight: normal;
  }

  & .hljs-type,
  & .hljs-class .hljs-title {
    color: ${Color.DarkBlue};
    font-weight: bold;
  }

  & .hljs-tag,
  & .hljs-name,
  & .hljs-attribute {
    color: ${Color.DarkerBlue};
    font-weight: normal;
  }

  & .hljs-regexp,
  & .hljs-link {
    color: ${Color.DarkGreen};
  }

  & .hljs-symbol,
  & .hljs-bullet {
    color: ${Color.Purple};
  }

  & .hljs-built_in,
  & .hljs-builtin-name {
    color: ${Color.LightTeal};
  }

  & .hljs-meta {
    color: ${Color.NeutralGrey};
    font-weight: bold;
  }

  & .hljs-deletion {
    background: ${Color.LightRed};
  }

  & .hljs-addition {
    background: ${Color.LightGreen};
  }

  & .hljs-emphasis {
    font-style: italic;
  }

  & .hljs-strong {
    font-weight: bold;
  }
`;

export default Article;
