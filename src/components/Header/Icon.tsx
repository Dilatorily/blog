import React, { memo } from 'react';
import { TestId } from '../../constants';
import { testId } from '../../utils';

interface IconProps {
  path: string;
  size?: number;
  viewBox: string;
}

function Icon({ path, size = 18, viewBox }: IconProps) {
  return (
    <svg
      data-testid={testId(TestId.HeaderIcon)}
      height={`${size}rem`}
      viewBox={viewBox}
      width={`${size}rem`}
    >
      <path d={path} data-testid={testId(TestId.HeaderIconPath)} />
    </svg>
  );
}

export default memo(Icon);
