import { styled } from '@linaria/react';
import { Color } from '../../constants';

const IconLink = styled.a`
  display: inline-block;
  fill: ${Color.LightGrey};
  transition: 0.25s ease-in-out;

  &:hover {
    fill: ${Color.White};
  }
`;

export default IconLink;
