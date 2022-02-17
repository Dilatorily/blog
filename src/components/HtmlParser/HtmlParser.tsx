import parse from 'html-react-parser';
import React, { memo } from 'react';

interface HtmlParserProps {
  children: string;
}

function HtmlParser({ children }: HtmlParserProps) {
  return <>{parse(children)}</>;
}

export default memo(HtmlParser);
