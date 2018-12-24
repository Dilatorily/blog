import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { LIGHT_GREY, WHITE } from '../../constants/style';

const Link = styled.a`
  color: ${LIGHT_GREY};
  fill: ${LIGHT_GREY};
  text-decoration: none;
  transition: 0.25s ease-in-out;
  ${({ icon }) => icon && `
    margin-right: 2px;
    font-size: 20px;
  `}

  &:hover {
    color: ${WHITE};
    fill: ${WHITE};
  }
`;

Link.propTypes = { icon: PropTypes.bool };

Link.defaultProps = { icon: false };

export default Link;
