import React from 'react';
import Link from './Link';
import Name from './Name';
import SocialMedia from './SocialMedia';
import TextContainer from './TextContainer';

const Text = () => (
  <TextContainer>
    <Name>Huy Dang Lê-Ngô</Name>
    <div>
      {'Software Engineer '}
      <Link title="Amazon" href="https://www.amazon.com">@Amazon</Link>
    </div>
    <SocialMedia />
  </TextContainer>
);

export default Text;
