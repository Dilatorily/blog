import { styled } from '@linaria/react';
import { Color } from '../../constants';

const Container = styled.header`
  background-color: ${Color.Red};
  height: 100px;
  margin-bottom: 50px;
  padding: 20px 0;
  text-align: center;

  @media only screen and (max-width: 360px) {
    height: 214px;
    margin-bottom: 30px;
  }
`;

export default Container;
