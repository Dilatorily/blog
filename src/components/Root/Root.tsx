import React, { memo, ReactNode } from 'react';
import Header from '../Header';
import Main from './Main';

interface RootProps {
  children: ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

export default memo(Root);
