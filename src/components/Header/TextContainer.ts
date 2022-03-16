import { styled } from '@linaria/react';
import { Breakpoint } from '../../constants';

const TextContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;

  @media only screen and (max-width: ${Breakpoint.Mobile}em) {
    display: block;
    text-align: center;
  }
`;

export default TextContainer;
