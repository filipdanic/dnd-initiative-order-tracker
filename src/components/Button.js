import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  flex: 1;
  cursor: pointer;
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
  opacity: ${props => props.bold ? 0.75 : 0.5};
  font-weight: ${props => props.bold ? 700 : 400};
  transition: 180ms all;
  font-size: 14px;
  :hover {
    opacity: 1;
  }  
`;

const Button = ({
  label,
  onClick,
  bold
}) =>
  <StyledButton
    onClick={onClick}
    bold={bold}
  >
    {label}
  </StyledButton>;

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
