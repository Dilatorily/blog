import { styled } from '@linaria/react';
import { Color } from '../../constants';

const Timestamp = styled.h3`
  color: ${Color.Red};
  display: inline-block;
  font-size: 16rem;
  font-style: italic;
  font-weight: 500;
  margin: 0;
  text-align: right;
  transition: 0.25s ease-in-out;
  vertical-align: middle;
  width: 200rem;
`;

export default Timestamp;
