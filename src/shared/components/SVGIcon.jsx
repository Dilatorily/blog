import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies

const SVGIcon = ({ path, size }) => (
  <svg height={size} width={size} viewBox="0 0 1792 1792">
    <path transform="scale(1,-1) translate(0,-1536)" d={path} />
  </svg>
);

SVGIcon.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.number,
};

SVGIcon.defaultProps = {
  size: 20,
};

export default SVGIcon;
