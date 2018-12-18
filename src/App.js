import React, { Component } from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Contacts from './contacts/Contacts';
import ContactForm from './contacts/ContactForm';

class App extends Component {
  state = {
    contacts: [
      {id: 1, firstName: 'Bob', phone: "123-123-1234"},
      {id: 2, firstName: 'Jerry', phone: "123-543-1234"},
      {id: 3, firstName: 'Cosmo', phone: "123-186-1234"}
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  };

  addContact = (contactData) => {
    let newContact = { id: this.getId(), ...contactData};
    this.setState({ contacts: [newContact, ...this.state.contacts] });
  };

  render() {
    return (
      <Container>
        <Header as="h1">React Contact List</Header>
        <br />
        <ContactForm add={this.addContact} />
        <br />
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
