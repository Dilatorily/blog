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
    outline: 2rem solid ${Color.White};
    outline-offset: 1rem;
  }
`;

export default Link;
