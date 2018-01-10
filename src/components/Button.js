import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className,
  label,
  onClick,
}) =>
  <button
    onClick={onClick}
    className={className}
  >
    {label}
  </button>;

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
