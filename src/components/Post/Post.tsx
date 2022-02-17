import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import React, { memo } from 'react';
import HtmlParser from '../HtmlParser';
import Article from './Article';
import Timestamp from './Timestamp';

interface PostProps {
  children: string;
  date: string;
}

function Post({ children, date }: PostProps) {
  return (
    <>
      <Timestamp>{format(parseISO(date), 'EEEE, MMMM do, yyyy')}</Timestamp>
      <Article>
        <HtmlParser>{children}</HtmlParser>
      </Article>
    </>
  );
}

export default memo(Post);
