import styled from 'react-emotion';
import Timestamp from './Timestamp';
import Title from './Title';
import { LIGHT_BLUE, LIGHT_GREY, RED } from '../../constants/style';

const PostContainer = styled.li`
  border-bottom: 1px solid ${LIGHT_GREY};
  margin-bottom: 20px;
  padding-bottom: 20px;

  & ${Timestamp} {
    color: ${RED};
  }

  &:hover ${Title}, &:hover ${Timestamp} {
    color: ${LIGHT_BLUE};
  }
`;

export default PostContainer;
