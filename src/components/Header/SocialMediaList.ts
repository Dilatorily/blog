import { styled } from '@linaria/react';
import { Breakpoint } from '../../constants';
import SocialMediaItem from './SocialMediaItem';

const SocialMediaList = styled.ol`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${SocialMediaItem} + ${SocialMediaItem} {
    margin-left: 4rem;
  }

  @media only screen and (max-width: ${Breakpoint.Mobile}em) {
    justify-content: center;
  }
`;

export default SocialMediaList;
