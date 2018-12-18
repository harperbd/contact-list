import React from 'react';
import {Table, Button, Modal} from "semantic-ui-react";
import ContactForm from './ContactForm';

const Contact = ({ id, firstName, phone, remove, edit }) => {
  return (
    <Table.Row id={id}>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>{phone}</Table.Cell>
      <Table.Cell>
        <Button color="red" onClick={() => remove(id)}>Delete</Button>
        <Modal trigger={
          <Button color="yellow" onClick={() => edit(id)}>Edit</Button>
        }>
          <Modal.Header>Edit Form</Modal.Header>
          <ContactForm
            id={id}
            firstName={firstName}
            phone={phone}
            edit={edit}
          />
        </Modal>
      </Table.Cell>
    </Table.Row>
  );
};

export default Contact;

