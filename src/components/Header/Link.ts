import { styled } from '@linaria/react';
import { Color } from '../../constants';

const Link = styled.a`
  color: ${Color.LightGrey};
  text-decoration: none;
  transition: 0.25s ease-in-out, outline 0s, outline-offset 0s;

  &:focus,
  &:hover {
    color: ${Color.White};
  }

  &:focus {
    outline: 2px solid ${Color.White};
    outline-offset: 1px;
  }
`;

export default Link;
