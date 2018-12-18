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

  removeContact = (id) => {
    const contacts = this.state.contacts.filter(contact => {
      if (id !== contact.id) {
        return contact;
      }
    });
    this.setState({contacts: [...contacts]});
  };

  updateContact = (contactData, id) => {
    // let removeIndex = this.state.contacts.map((item) => {
    //   return item.id;
    // }).indexOf(id);
    //
    // removeIndex && this.state.contacts.splice(removeIndex, 1);
    // this.addContact(contactData)

    let contacts = this.state.contacts;
    contacts.map(c => {
      if (c.id === id) {
        c.firstName = contactData.firstName;
        c.phone = contactData.phone;
      }
      this.setState({ contacts: [...contacts]});
    });
  };

  render() {
    return (
      <Container>
        <Header as="h1">React Contact List</Header>
        <br />
        <ContactForm add={this.addContact} />
        <br />
        <Contacts
            contacts={this.state.contacts}
            remove={this.removeContact}
            edit={this.updateContact}
        />
      </Container>
    );
  }
}

export default App;
