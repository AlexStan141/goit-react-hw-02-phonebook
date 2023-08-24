import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import css from './ContactsList.module.css';

function filterResults(contacts, filterString) {
  var result = [];
  for (let contact of contacts) {
    if (contact.name.toLowerCase().includes(filterString.toLowerCase())) {
      result.push(contact);
    }
  }
  return result;
}

export const ContactsList = ({ contacts, filterString, onDeleteElement }) => {
  return (
    <ul className={css.list}>
      {filterResults(contacts, filterString).map((contact, index) => {
        return (
          <Contact
            name={contact.name}
            number={contact.number}
            onButtonClick={() => {
              onDeleteElement(contact.name);
            }}
            key={index}
          ></Contact>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  // contacts: PropTypes.arrayOf(PropTypes.instanceOf(Contact)),  imi da eroare
  filterString: PropTypes.string,
  onDeleteElement: PropTypes.func.isRequired,
};
