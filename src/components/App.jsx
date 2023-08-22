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

  render() {
    return (
      <>
        <Form
          onSubmit={values => {
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
          }}
        ></Form>
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
        ></ContactsList>
      </>
    );
  }
}

export default App;
