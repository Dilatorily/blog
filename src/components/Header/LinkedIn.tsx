import React, { memo } from 'react';
import Icon from './Icon';
import IconLink from './IconLink';
import SocialMediaItem from './SocialMediaItem';

const path =
  'M349 911v-991h-330v991h330zM370 1217q1 -73 -50.5 -122t-135.5 -49h-2q-82 0 -132 49t-50 122q0 74 51.5 122.5t134.5 48.5t133 -48.5t51 -122.5zM1536 488v-568h-329v530q0 105 -40.5 164.5t-126.5 59.5q-63 0 -105.5 -34.5t-63.5 -85.5q-11 -30 -11 -81v-553h-329 q2 399 2 647t-1 296l-1 48h329v-144h-2q20 32 41 56t56.5 52t87 43.5t114.5 15.5q171 0 275 -113.5t104 -332.5z';

function LinkedIn() {
  return (
    <SocialMediaItem>
      <IconLink href="https://www.linkedin.com/in/dilatorily" title="LinkedIn">
        <Icon path={path} />
      </IconLink>
    </SocialMediaItem>
  );
}

export default memo(LinkedIn);
