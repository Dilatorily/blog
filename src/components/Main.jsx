import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

const styles = {
    heading: {
        color: 'blue',
        ':hover': { color: 'red' },
        '@media only screen and (max-width: 768px)': { color: 'green' }
    }
};

const Main = () =>
    <div>
        <h1 style={ styles.heading }>
            Hello, World from React with hot reload and Radium!
        </h1>
        <Link to="/test">To link</Link>
    </div>
;

export default Radium(Main);
