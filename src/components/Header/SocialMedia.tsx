import React, { memo } from 'react';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import SocialMediaList from './SocialMediaList';
import Twitter from './Twitter';

function SocialMedia() {
  return (
    <SocialMediaList>
      <LinkedIn />
      <GitHub />
      <Twitter />
    </SocialMediaList>
  );
}

export default memo(SocialMedia);
