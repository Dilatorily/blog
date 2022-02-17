import React, { memo } from 'react';
import Avatar from './Avatar';
import Container from './Container';
import Text from './Text';

function Header() {
  return (
    <Container>
      <Avatar />
      <Text />
    </Container>
  );
}

export default memo(Header);
