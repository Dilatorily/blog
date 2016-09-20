import React from 'react';
import radium, { Style } from 'radium';
import { Link } from 'react-router';

import avatar from '../assets/avatar.jpg';
import { RED, DARK_GREY, LIGHT_GREY, WHITE } from '../constants/style';

const styles = {
  container: {
    fontFamily: 'Raleway, sans-serif',
    color: DARK_GREY,
  },
  header: {
    backgroundColor: RED,
    height: 140,
    marginBottom: 50,
    '@media only screen and (max-width: 360px)': {
      height: 214,
      marginBottom: 30,
    },
    '.avatar': {
      borderRadius: '50%',
    },
    '.avatar:hover': {
      borderRadius: 25,
    },
    '.link': {
      color: LIGHT_GREY,
      fill: LIGHT_GREY,
    },
    '.link:hover': {
      color: WHITE,
      fill: WHITE,
    },
  },
  avatarContainer: {
    textAlign: 'center',
    padding: '20px 0',
  },
  avatar: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: 20,
    width: 100,
    transition: '0.25s ease-in-out',
    '@media only screen and (max-width: 360px)': {
      marginBottom: 10,
    },
  },
  headerTextContainer: {
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'left',
    '@media only screen and (max-width: 360px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
    transition: '0.25s ease-in-out',
  },
  icon: {
    marginRight: 2,
    fontSize: 20,
  },
  contentContainer: {
    maxWidth: 720,
    margin: '0 auto 50px',
    padding: '0 20px',
  },
};

const linkedin = 'M349 911v-991h-330v991h330zM370 1217q1 -73 -50.5 -122t-135.5 -49h-2q-82 0 -132 ' +
    '49t-50 122q0 74 51.5 122.5t134.5 48.5t133 -48.5t51 -122.5zM1536 488v-568h-329v530q0 105 -40.' +
    '5 164.5t-126.5 59.5q-63 0 -105.5 -34.5t-63.5 -85.5q-11 -30 -11 -81v-553h-329 q2 399 2 647t-1' +
    ' 296l-1 48h329v-144h-2q20 32 41 56t56.5 52t87 43.5t114.5 15.5q171 0 275 -113.5t104 -332.5z';
const github = 'M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5q0 -251 -146.5 -451.5t-378.5 -2' +
    '77.5q-27 -5 -40 7t-13 30q0 3 0.5 76.5t0.5 134.5q0 97 -52 142q57 6 102.5 18t94 39t81 66.5t53 ' +
    '105t20.5 150.5q0 119 -79 206q37 91 -8 204q-28 9 -81 -11t-92 -44l-38 -24 q-93 26 -192 26t-192' +
    ' -26q-16 11 -42.5 27t-83.5 38.5t-85 13.5q-45 -113 -8 -204q-79 -87 -79 -206q0 -85 20.5 -150t5' +
    '2.5 -105t80.5 -67t94 -39t102.5 -18q-39 -36 -49 -103q-21 -10 -45 -15t-57 -5t-65.5 21.5t-55.5 ' +
    '62.5q-19 32 -48.5 52t-49.5 24l-20 3q-21 0 -29 -4.5 t-5 -11.5t9 -14t13 -12l7 -5q22 -10 43.5 -' +
    '38t31.5 -51l10 -23q13 -38 44 -61.5t67 -30t69.5 -7t55.5 3.5l23 4q0 -38 0.5 -88.5t0.5 -54.5q0 ' +
    '-18 -13 -30t-40 -7q-232 77 -378.5 277.5t-146.5 451.5q0 209 103 385.5t279.5 279.5t385.5 103zM' +
    '291 305q3 7 -7 12 q-10 3 -13 -2q-3 -7 7 -12q9 -6 13 2zM322 271q7 5 -2 16q-10 9 -16 3q-7 -5 2' +
    ' -16q10 -10 16 -3zM352 226q9 7 0 19q-8 13 -17 6q-9 -5 0 -18t17 -7zM394 184q8 8 -4 19q-12 12 ' +
    '-20 3q-9 -8 4 -19q12 -12 20 -3zM451 159q3 11 -13 16q-15 4 -19 -7t13 -15q15 -6 19 6z M514 154' +
    'q0 13 -17 11q-16 0 -16 -11q0 -13 17 -11q16 0 16 11zM572 164q-2 11 -18 9q-16 -3 -14 -15t18 -8' +
    't14 14z';
const twitter = 'M1620 1128q-67 -98 -162 -167q1 -14 1 -42q0 -130 -38 -259.5t-115.5 -248.5t-184.5 ' +
    '-210.5t-258 -146t-323 -54.5q-271 0 -496 145q35 -4 78 -4q225 0 401 138q-105 2 -188 64.5t-114 ' +
    '159.5q33 -5 61 -5q43 0 85 11q-112 23 -185.5 111.5t-73.5 205.5v4q68 -38 146 -41 q-66 44 -105 ' +
    '115t-39 154q0 88 44 163q121 -149 294.5 -238.5t371.5 -99.5q-8 38 -8 74q0 134 94.5 228.5t228.5' +
    ' 94.5q140 0 236 -102q109 21 205 78q-37 -115 -142 -178q93 10 186 50z';

const App = prop =>
  <div style={styles.container}>
    <header className="header">
      <div style={styles.avatarContainer}>
        <Link to="/">
          <img key="avatar" alt="avatar" src={avatar} className="avatar" style={styles.avatar} />
        </Link>
        <div style={styles.headerTextContainer}>
          <div style={styles.name}>Huy Dang Lê-Ngô</div>
          <div>
            Software Engineer&nbsp;
            <a title="Interset" href="https://www.interset.com" className="link" style={styles.link}>
              @Interset
            </a>
          </div>
          <div>
            <a key="linkedin" title="LinkedIn" href="https://www.linkedin.com/in/dilatorily" className="link" style={[styles.link, styles.icon]}>
              <svg height={20} width={20} viewBox="0 0 1792 1792">
                <path transform={'scale(1,-1) translate(0,-1536)'} d={linkedin} />
              </svg>
            </a>
            <a key="github" title="GitHub" href="https://github.com/Dilatorily" className="link" style={[styles.link, styles.icon]}>
              <svg height={20} width={20} viewBox="0 0 1792 1792">
                <path transform={'scale(1,-1) translate(0,-1536)'} d={github} />
              </svg>
            </a>
            <a key="twitter" title="Twitter" href="https://twitter.com/Dagneau" className="link" style={[styles.link, styles.icon]}>
              <svg height={20} width={20} viewBox="0 0 1792 1792">
                <path transform={'scale(1,-1) translate(0,-1536)'} d={twitter} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div style={styles.contentContainer}>{prop.children}</div>
    <Style scopeSelector=".header" rules={styles.header} />
  </div>
;

App.propTypes = { children: React.PropTypes.node };

export default radium(App);
