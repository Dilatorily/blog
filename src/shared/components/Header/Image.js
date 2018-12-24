import styled from '@emotion/styled';

const Image = styled.img`
  border-radius: 50%;
  display: inline-block;
  margin-right: 20px;
  transition: 0.25s ease-in-out;
  vertical-align: middle;
  width: 100px;

  &:hover {
    border-radius: 25px;
  }

  @media only screen and (max-width: 360px) {
    margin-bottom: 10px;
  }
`;

export default Image;
