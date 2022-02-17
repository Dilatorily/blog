import { styled } from '@linaria/react';
import { Color } from '../../constants';
import Timestamp from './Timestamp';
import Title from './Title';

const PostContainer = styled.li`
  border-bottom: 1px solid ${Color.LightGrey};
  margin-bottom: 20px;
  padding-bottom: 20px;

  & ${Timestamp} {
    color: ${Color.Red};
  }

  &:hover ${Title}, &:hover ${Timestamp} {
    color: ${Color.LightBlue};
  }
`;

export default PostContainer;
