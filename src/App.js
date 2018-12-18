import React, { Component } from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Contacts from './contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      {id: 1, firstName: 'Bob', phone: "123-123-1234"},
      {id: 2, firstName: 'Jerry', phone: "123-543-1234"},
      {id: 3, firstName: 'Cosmo', phone: "123-186-1234"}
    ]
  };

  render() {
    return (
      <Container>
        <Header as="h1">React Contact List</Header>
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
