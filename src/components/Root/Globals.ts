import { css } from '@linaria/core';
import { Color } from '../../constants';

const Globals = css`
  :global() {
    html {
      font-size: 6.25%;
    }

    body {
      color: ${Color.DarkGrey};
      font-family: Raleway, sans-serif;
      font-size: 16rem;
    }
  }
`;

export default Globals;
