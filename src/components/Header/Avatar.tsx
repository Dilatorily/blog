import React, { memo } from 'react';
import avatar from './Avatar.jpg';
import AvatarLink from './AvatarLink';
import Image from './Image';

function Avatar() {
  return (
    <AvatarLink href="/">
      <Image alt="avatar" src={avatar} />
    </AvatarLink>
  );
}

export default memo(Avatar);
