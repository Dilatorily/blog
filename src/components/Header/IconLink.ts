import { styled } from '@linaria/react';
import { Color } from '../../constants';

const IconLink = styled.a`
  display: inline-flex;
  fill: ${Color.LightGrey};
  transition: 0.25s ease-in-out, outline 0s, outline-offset 0s;

  &:focus,
  &:hover {
    fill: ${Color.White};
  }

  &:focus {
    outline: 2rem solid ${Color.White};
    outline-offset: 1rem;
  }
`;

export default IconLink;
