import { styled } from '@linaria/react';
import { Breakpoint, Color } from '../../constants';
import Image from './Image';

const AvatarLink = styled.a`
  display: inline-block;
  margin-right: 20rem;
  transition: 0.25s ease-in-out, outline 0s, outline-offset 0s;

  &:focus {
    outline: 2rem solid ${Color.White};
    outline-offset: 1rem;

    ${Image} {
      border-radius: 25rem;
    }
  }

  @media only screen and (max-width: ${Breakpoint.Mobile}em) {
    margin-bottom: 10rem;
    margin-right: 0;
  }
`;

export default AvatarLink;
