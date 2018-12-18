import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const Contacts = ({ contacts }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Option</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          contacts.map( contact => (
              <Table.Row id={contact.id}>
                <Table.Cell>{contact.firstName}</Table.Cell>
                <Table.Cell>{contact.phone}</Table.Cell>
                <Table.Cell><Button color="red">Delete</Button></Table.Cell>
              </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};

export default Contacts;