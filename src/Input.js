import React, { Component } from 'react';

export default ({
  label,
  type,
  value,
  onChange,
}) =>
  <label>
    {label}:
    <input type={type} value={value} onChange={onChange} />
  </label>