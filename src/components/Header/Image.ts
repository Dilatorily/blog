import { styled } from '@linaria/react';

const Image = styled.img`
  border-radius: 50%;
  transition: 0.25s ease-in-out;
  vertical-align: middle;
  width: 100rem;

  &:hover {
    border-radius: 25rem;
  }
`;

export default Image;
