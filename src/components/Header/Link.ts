import { styled } from '@linaria/react';
import { Color } from '../../constants';

const Link = styled.a`
  color: ${Color.LightGrey};
  text-decoration: none;
  transition: 0.25s ease-in-out;

  &:hover {
    color: ${Color.White};
  }
`;

export default Link;
