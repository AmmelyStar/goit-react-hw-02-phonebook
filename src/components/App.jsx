import React, { Component } from 'react';
import './style.module.css'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (newContact) => {
    const { contacts } = this.state;

   
    const isNameExist = contacts.some((contact) => contact.name === newContact.name);

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  onChangeFilter = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

    removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <div>
          <h1>Phonebook</h1>

          <ContactForm addContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter
            name="filter"
            value={filter}
            onChangeFilter={this.onChangeFilter}
          />
          <ContactList
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          />
        </div>
      </>
    );
  }
}

export default App;