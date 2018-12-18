import React, { Component } from 'react';
import './App.css';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import Contacts from './contacts/Contacts';
import ContactForm from './contacts/ContactForm';

class App extends Component {
  state = {
    contacts: [
      {id: 1, firstName: 'Bob', phone: "123-123-1234"},
      {id: 2, firstName: 'Jerry', phone: "123-543-1234"},
      {id: 3, firstName: 'Cosmo', phone: "123-186-1234"}
    ],
    showForm: true
  };

  toggleForm = () => this.setState({showForm: !this.state.showForm});

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
    const { showForm, contacts } = this.state;
    return (
      <Container>
        <Header as="h1">React Contact List</Header>
        <br />
        <Segment>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          {showForm ? <ContactForm add={this.addContact} /> : null }
        </Segment>
        <br />
        <Contacts
            contacts={contacts}
            remove={this.removeContact}
            edit={this.updateContact}
        />
      </Container>
    );
  }
}

export default App;
