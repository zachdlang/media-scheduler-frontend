import React, { Component } from 'react';
import { Form, Icon } from 'react-bulma-components';


class Input extends Component {
  state = {
    error: '',
    value: '',
  }

  getIcon = () => {
    if (this.props.icon) {
      return(
        <Icon align="left">{React.createElement(this.props.icon)}</Icon>
      )
    }
  }

  getError = () => {
    if (this.state.error) {
      return(
        <Form.Help color="danger">{this.state.error}</Form.Help>
      )
    }
  }

  getName = () => this.props.name;
  getValue = () => this.state.value;
  handleChange = (event) => this.setState({ value: event.target.value }, this.validate);

  validate = () => {
    let error = '';
    if (this.props.required && !this.state.value) error = 'This field is required.';
    this.setState({ error: error });
    return error === '';
  }


  render() {
    return(
      <Form.Field>
        <Form.Control iconLeft={this.props.icon !== undefined}>
          <Form.Input
            name={this.props.name}
            type={this.props.type || 'text'}
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={this.handleChange}
          />
          {this.getIcon()}
        </Form.Control>
        {this.getError()}
      </Form.Field>
    )
  }
}

export default Input;