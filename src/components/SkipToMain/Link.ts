import { styled } from '@linaria/react';
import { Color } from '../../constants';

const Link = styled.a`
  background-color: ${Color.White};
  color: ${Color.Red};
  left: 5rem;
  padding: 8rem;
  position: fixed;
  text-decoration: none;
  top: 5rem;
  transition: 0.25s ease-in-out, clip 0s, outline 0s, outline-offset 0s;

  &:not(:focus) {
    clip: rect(0, 0, 0, 0);
  }

  &:focus,
  &:hover {
    color: ${Color.LightBlue};
  }

  &:focus {
    outline: 2rem solid ${Color.Red};
    outline-offset: -4rem;
  }
`;

export default Link;
