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

const Test = () =>
    <div>
        <h1 style={ styles.heading }>
            Test routing!
        </h1>
        <Link to="/">To main</Link>
    </div>
;

export default Radium(Test);
