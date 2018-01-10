import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className,
  label,
  type,
  value,
  onChange,
}) =>
  <label className={className}>
    {label}:
    <input
      type={type}
      value={value}
      onChange={onChange}
    />
  </label>;

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Input;
