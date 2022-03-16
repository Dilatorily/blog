import React, { memo } from 'react';

interface IconProps {
  path: string;
  size?: number;
  viewBox: string;
}

function Icon({ path, size = 18, viewBox }: IconProps) {
  return (
    <svg height={size} viewBox={viewBox} width={size}>
      <path d={path} />
    </svg>
  );
}

export default memo(Icon);
