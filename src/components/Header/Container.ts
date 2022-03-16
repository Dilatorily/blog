import { styled } from '@linaria/react';
import { Breakpoint, Color } from '../../constants';

const Container = styled.header`
  background-color: ${Color.Red};
  margin-bottom: 50rem;
  padding: 20rem 0;
  text-align: center;

  @media only screen and (max-width: ${Breakpoint.Mobile}em) {
    margin-bottom: 30rem;
  }
`;

export default Container;
