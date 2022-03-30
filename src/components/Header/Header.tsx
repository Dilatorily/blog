import React, { memo } from 'react';
import { TestId } from '../../constants';
import { testId } from '../../utils';
import Avatar from './Avatar';
import Container from './Container';
import Information from './Information';

function Header() {
  return (
    <Container data-testid={testId(TestId.Header)}>
      <Avatar />
      <Information />
    </Container>
  );
}

export default memo(Header);
