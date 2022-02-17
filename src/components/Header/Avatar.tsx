import { styled } from '@linaria/react';
import React, { memo } from 'react';
import avatar from './Avatar.jpg';
import Image from './Image';

const Link = styled.a`
  display: inline-block;
  margin-right: 20px;
`;

function Avatar() {
  return (
    <Link href="/">
      <Image alt="avatar" src={avatar} />
    </Link>
  );
}

export default memo(Avatar);
