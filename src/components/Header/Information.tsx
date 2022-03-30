import React, { memo } from 'react';
import { TestId } from '../../constants';
import { testId } from '../../utils';
import InformationContainer from './InformationContainer';
import Link from './Link';
import Name from './Name';
import SocialMedia from './SocialMedia';
import Title from './Title';

function Information() {
  return (
    <InformationContainer data-testid={testId(TestId.HeaderText)}>
      <Name>Huy Dang Lê-Ngô</Name>
      <Title>
        {'Senior Front-End Engineer '}
        <Link href="https://slack.com" title="Slack">
          @Slack
        </Link>
      </Title>
      <SocialMedia />
    </InformationContainer>
  );
}

export default memo(Information);
