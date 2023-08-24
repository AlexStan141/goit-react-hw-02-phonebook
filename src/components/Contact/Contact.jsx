import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ name, number, onButtonClick }) => {
  return (
    <li>
      <span>{name + ': ' + number}</span>
      <button onClick={onButtonClick} className={css.button}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
