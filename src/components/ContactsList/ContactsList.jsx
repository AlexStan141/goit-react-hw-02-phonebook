import React from 'react';
import { Contact } from 'components/Contact/Contact';

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
    <ul>
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

//Cream o metoda contacts.filter(filter)
