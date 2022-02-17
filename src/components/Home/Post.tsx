import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import React from 'react';
import Article from './Article';
import Link from './Link';
import PostContainer from './PostContainer';
import Timestamp from './Timestamp';

interface PostProps {
  children: string;
  date: string;
}

function Post({ children, date }: PostProps) {
  return (
    <PostContainer>
      <Link href={`/posts/${date}`}>
        <Article>{children}</Article>
        <Timestamp>{format(parseISO(date), 'MMMM do, yyyy')}</Timestamp>
      </Link>
    </PostContainer>
  );
}

export default Post;
