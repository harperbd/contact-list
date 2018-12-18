import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = {
    firstName: '',
    phone: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({firstName: '', phone: ''});
  };

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group width="equal">
            <Form.Input
                label="First Name"
                placeholder="First Name Here"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                fluid
            />
            <Form.Input
                label="Phone"
                placeholder="Phone Number Here"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                fluid
            />
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
    );
  };
}

export default ContactForm;