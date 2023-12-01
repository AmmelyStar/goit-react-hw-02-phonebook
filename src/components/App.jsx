import { nanoid } from 'nanoid'
import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
     
  };

  render() {
    const { name, contacts, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name} - {contact.number}</li>
          ))}
        </ul>
      </div>
    );
  }
}


export default App;