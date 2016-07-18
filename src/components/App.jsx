import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import avatar from '../assets/avatar.jpg';
import { RED, DARK_GREY, LIGHT_GREY, WHITE } from '../constants/style';
import FontAwesomeIcon from './FontAwesomeIcon';

const styles = {
    container: {
        fontFamily: 'Helvetica Neue, Raleway, sans-serif',
        color: DARK_GREY
    },
    header: {
        backgroundColor: RED,
        height: 140,
        marginBottom: 50,
        '@media only screen and (max-width: 360px)': {
            height: 214,
            marginBottom: 30
        }
    },
    avatarContainer: {
        textAlign: 'center',
        padding: '20px 0'
    },
    avatar: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 20,
        width: 100,
        borderRadius: '50%',
        transition: '0.25s ease-in-out',
        ':hover': { borderRadius: 25 },
        '@media only screen and (max-width: 360px)': { marginBottom: 10 }
    },
    headerTextContainer: {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'left',
        '@media only screen and (max-width: 360px)': {
            display: 'block',
            textAlign: 'center'
        }
    },
    name: {
        fontSize: 20,
        fontWeight: 600
    },
    link: {
        color: LIGHT_GREY,
        textDecoration: 'none',
        transition: '0.25s ease-in-out',
        ':hover': { color: WHITE }
    },
    icon: {
        marginRight: 5,
        fontSize: 20
    },
    contentContainer: {
        maxWidth: 720,
        margin: '0 auto 50px',
        padding: '0 20px'
    }
};

const App = (props) =>
    <div style={ styles.container }>
        <header style={ styles.header }>
            <div style={ styles.avatarContainer }>
                <Link to="/">
                    <img
                        key="avatar"
                        alt="avatar"
                        src={ avatar }
                        style={ styles.avatar }
                    />
                </Link>
                <div style={ styles.headerTextContainer }>
                    <div style={ styles.name }>
                        Huy Dang Lê-Ngô
                    </div>
                    <div>
                        Software Engineer <a
                            key="company"
                            title="Interset"
                            href="https://www.interset.com"
                            style={ styles.link }
                        >
                            @Interset
                        </a>
                    </div>
                    <div>
                        <a
                            key="linkedin"
                            title="LinkedIn"
                            href="https://www.linkedin.com/in/dilatorily"
                            style={ [styles.link, styles.icon] }
                        >
                            <FontAwesomeIcon type="linkedin" />
                        </a>
                        <a
                            key="github"
                            title="GitHub"
                            href="https://github.com/Dilatorily"
                            style={ [styles.link, styles.icon] }
                        >
                            <FontAwesomeIcon type="github" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div style={ styles.contentContainer }>
            { props.children }
        </div>
    </div>
;

App.propTypes = { children: React.PropTypes.node };

export default Radium(App);
