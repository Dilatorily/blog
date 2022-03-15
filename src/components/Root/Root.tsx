import React, { memo, ReactNode } from 'react';
import { Identifier } from '../../constants';
import Header from '../Header';
import SkipToMain from '../SkipToMain';
import Main from './Main';

interface RootProps {
  children: ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <>
      <SkipToMain />
      <Header />
      <Main id={Identifier.Main}>{children}</Main>
    </>
  );
}

export default memo(Root);
