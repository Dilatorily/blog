import React, { memo } from 'react';
import { TestId } from '../../constants';
import { testId } from '../../utils';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import SocialMediaList from './SocialMediaList';
import Twitter from './Twitter';

function SocialMedia() {
  return (
    <SocialMediaList data-testid={testId(TestId.HeaderSocialMedia)}>
      <LinkedIn />
      <GitHub />
      <Twitter />
    </SocialMediaList>
  );
}

export default memo(SocialMedia);
