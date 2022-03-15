import React, { memo } from 'react';

interface IconProps {
  path: string;
  size?: number;
  viewBox: string;
}

const defaultProps = { size: 18 };

function Icon({ path, size = defaultProps.size, viewBox }: IconProps) {
  return (
    <svg height={size} viewBox={viewBox} width={size}>
      <path d={path} />
    </svg>
  );
}

Icon.defaultProps = defaultProps;

export default memo(Icon);
