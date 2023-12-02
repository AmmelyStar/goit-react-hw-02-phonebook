import React, { Component } from 'react';
import { nanoid } from 'nanoid'

class ContactForm extends Component{
    state = {
        name: '',
        number: ''
}

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
      this.props.addContact(newContact);

    this.setState({
     
      name: '',
      number: '',
    });
        };


    render() {
        const { name, number} = this.state;
        return (
         <div>
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
        </div>
        
    )
       

        
            
    }

};

 export default ContactForm;