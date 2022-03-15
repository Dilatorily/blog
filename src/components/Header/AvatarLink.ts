import { styled } from '@linaria/react';
import { Color } from '../../constants';
import Image from './Image';

const AvatarLink = styled.a`
  display: inline-block;
  margin-right: 20px;
  transition: 0.25s ease-in-out, outline 0s, outline-offset 0s;

  &:focus {
    outline: 2px solid ${Color.White};
    outline-offset: 1px;

    ${Image} {
      border-radius: 25px;
    }
  }
`;

export default AvatarLink;
