import styled from '@emotion/styled';
import { RED } from '../../constants/style';

const Container = styled.header`
  background-color: ${RED};
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
