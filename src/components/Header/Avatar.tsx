import React, { memo } from 'react';
import { TestId } from '../../constants';
import { testId } from '../../utils';
import avatar from './Avatar.jpg';
import AvatarLink from './AvatarLink';
import Image from './Image';

function Avatar() {
  return (
    <AvatarLink data-testid={testId(TestId.HeaderAvatar)} href="/">
      <Image alt="Home" height="100rem" src={avatar} width="100rem" />
    </AvatarLink>
  );
}

export default memo(Avatar);
