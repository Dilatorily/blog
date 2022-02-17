import React, { memo } from 'react';

interface IconProps {
  path: string;
  size?: number;
}

const defaultProps = { size: 20 };

function Icon({ path, size = defaultProps.size }: IconProps) {
  return (
    <svg height={size} viewBox="0 0 1792 1792" width={size}>
      <path d={path} transform="scale(1,-1) translate(0,-1536)" />
    </svg>
  );
}

Icon.defaultProps = defaultProps;

export default memo(Icon);
