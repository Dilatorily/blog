import { styled } from '@linaria/react';
import { Color } from '../../constants';
import Timestamp from './Timestamp';
import Title from './Title';

const Link = styled.a`
  color: ${Color.DarkGrey};
  display: block;
  text-decoration: none;

  &:focus,
  &:hover {
    ${Title}, ${Timestamp} {
      color: ${Color.LightBlue};
    }
  }

  &:focus {
    outline: 2px solid ${Color.Red};
    outline-offset: 1px;
  }
`;

export default Link;
