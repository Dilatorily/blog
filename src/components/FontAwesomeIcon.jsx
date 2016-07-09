import React from 'react';
import Radium from 'radium';

const FontAwesomeIcon = (props) =>
    <span
        style={ props.style }
        className={ `fa fa-${ props.type }` }
    />
;

FontAwesomeIcon.propTypes = {
    type: React.PropTypes.string.isRequired,
    style: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object
    ])
};

export default Radium(FontAwesomeIcon);
