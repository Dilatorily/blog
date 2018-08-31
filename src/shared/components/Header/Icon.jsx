import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ path, size }) => (
  <svg height={size} width={size} viewBox="0 0 1792 1792">
    <path transform="scale(1,-1) translate(0,-1536)" d={path} />
  </svg>
);

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 20,
};

export default Icon;
