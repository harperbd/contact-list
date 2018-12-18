import React from 'react';
import {Table, Button} from "semantic-ui-react";

const Contact = ({ id, firstName, phone }) => {
  return (
    <Table.Row id={id}>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>{phone}</Table.Cell>
      <Table.Cell><Button color="red">Delete</Button></Table.Cell>
    </Table.Row>
  );
};

export default Contact;
