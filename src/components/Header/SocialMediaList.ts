import { styled } from '@linaria/react';
import IconLink from './IconLink';
import SocialMediaItem from './SocialMediaItem';

const SocialMediaList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${SocialMediaItem} + ${SocialMediaItem} {
    ${IconLink} {
      margin-left: 2px;
    }
  }
`;

export default SocialMediaList;
