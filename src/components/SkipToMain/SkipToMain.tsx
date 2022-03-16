import React from 'react';
import { Identifier } from '../../constants';
import Link from './Link';

function SkipToMain() {
  return <Link href={`#${Identifier.Main}`}>Skip to main content</Link>;
}

export default SkipToMain;
