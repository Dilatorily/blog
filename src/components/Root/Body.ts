import { css } from '@linaria/core';
import { Color } from '../../constants';

const Body = css`
  :global() {
    body {
      color: ${Color.DarkGrey};
      font-family: Raleway, sans-serif;
    }
  }
`;

export default Body;
