import React, { memo } from 'react';
import { compareDate } from '../../utils';
import Post from './Post';
import Posts from './Posts';

interface HomeProps {
  posts: Record<string, string>;
}

function Home({ posts }: HomeProps) {
  return (
    <Posts>
      {Object.entries(posts)
        .sort(([date1], [date2]) => compareDate(date1, date2))
        .map(([date, post]) => (
          <Post date={date} key={date}>
            {post}
          </Post>
        ))}
    </Posts>
  );
}

export default memo(Home);
