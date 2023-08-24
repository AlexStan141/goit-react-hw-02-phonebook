import React from 'react';
import Form from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import SearchFilter from './SearchFilter/SearchFilter';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends React.Component {
  state = { ...INITIAL_STATE };

  checkNameExistance(name) {
    for (let contact of this.state.contacts) {
      if (contact.name === name) {
        return true;
      }
    }
    return false;
  }

  deleteElement(name) {
    this.setState(prevState => {
      var nextState = { contacts: [], filter: prevState.filter };
      for (let contact of prevState.contacts) {
        if (contact.name !== name) {
          nextState.contacts.push(contact);
        }
      }
      return nextState;
    });
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form
          onSubmit={values => {
            if (!this.checkNameExistance(values.name)) {
              this.setState(prevState => {
                var nextState = prevState;
                nextState.contacts = [
                  ...prevState.contacts,
                  {
                    id: nanoid(),
                    name: values.name,
                    number: values.number,
                  },
                ];
                return nextState;
              });
            } else {
              alert(`${values.name} is already in contacts`);
            }
          }}
        ></Form>
        <h2>Contacts</h2>
        <SearchFilter
          onStringChange={e => {
            this.setState({
              filter: e.target.value,
            });
          }}
        ></SearchFilter>
        <ContactsList
          contacts={this.state.contacts}
          filterString={this.state.filter}
          onDeleteElement={name => {
            // console.log(name);
            this.setState(prevState => {
              var nextState = { contacts: [], filter: prevState.filter };
              for (let contact of prevState.contacts) {
                if (contact.name !== name) {
                  nextState.contacts.push(contact);
                }
              }
              return nextState;
            });
          }}
        ></ContactsList>
      </>
    );
  }
}

export default App;
