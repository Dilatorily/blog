import styled from '@emotion/styled';
import { Link as BaseLink } from 'react-router-dom';
import { DARK_GREY } from '../../constants/style';

const Link = styled(BaseLink)`
  color: ${DARK_GREY};
  text-decoration: none;
`;

export default Link;
