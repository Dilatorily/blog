import React, { memo } from 'react';
import Link from './Link';
import Name from './Name';
import SocialMedia from './SocialMedia';
import TextContainer from './TextContainer';
import Title from './Title';

function Text() {
  return (
    <TextContainer>
      <Name>Huy Dang Lê-Ngô</Name>
      <Title>
        {'Senior Front-End Engineer '}
        <Link href="https://slack.com" title="Slack">
          @Slack
        </Link>
      </Title>
      <SocialMedia />
    </TextContainer>
  );
}

export default memo(Text);
