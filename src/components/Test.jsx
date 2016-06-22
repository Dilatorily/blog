import React from 'react';
import Radium from 'radium';

const styles = {
    heading: {
        color: 'blue',
        ':hover': { color: 'red' },
        '@media only screen and (max-width: 768px)': { color: 'green' }
    }
};

const Test = () =>
    <h1 style={ styles.heading }>
        Test routing!
    </h1>
;

export default Radium(Test);
