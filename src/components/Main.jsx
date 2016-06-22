import React from 'react';
import Radium from 'radium';

const styles = {
    heading: {
        color: 'blue',
        ':hover': { color: 'red' },
        '@media only screen and (max-width: 768px)': { color: 'green' }
    }
};

const Main = () =>
    <h1 style={ styles.heading }>
        Hello, World from React with hot reload and Radium!
    </h1>
;

export default Radium(Main);
