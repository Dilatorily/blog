import { styled } from '@linaria/react';

const TextContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;

  @media only screen and (max-width: 360px) {
    display: block;
    text-align: center;
  }
`;

export default TextContainer;
