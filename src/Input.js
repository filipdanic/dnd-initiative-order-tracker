import React from 'react';

export default ({
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
  </label>
