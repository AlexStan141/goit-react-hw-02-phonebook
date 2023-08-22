import React from 'react';

export const Contact = ({ name, number }) => {
  return <li>{name + ': ' + number}</li>;
};
