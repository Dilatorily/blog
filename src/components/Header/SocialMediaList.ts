import { styled } from '@linaria/react';
import SocialMediaItem from './SocialMediaItem';

const SocialMediaList = styled.ol`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${SocialMediaItem} + ${SocialMediaItem} {
    margin-left: 4px;
  }
`;

export default SocialMediaList;
