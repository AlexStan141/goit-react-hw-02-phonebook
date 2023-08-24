import React from 'react';

export const Contact = ({ name, number, onButtonClick }) => {
  return (
    <li>
      <span>{name + ': ' + number}</span>
      <button onClick={onButtonClick}>Delete</button>
    </li>
  );
};
