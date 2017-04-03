import React from 'react';

const SVGIcon = ({ path, size }) => (
  <svg height={size} width={size} viewBox="0 0 1792 1792">
    <path transform="scale(1,-1) translate(0,-1536)" d={path} />
  </svg>
);

SVGIcon.propTypes = {
  path: React.PropTypes.string.isRequired,
  size: React.PropTypes.number,
};

SVGIcon.defaultProps = {
  size: 20,
};

export default SVGIcon;
