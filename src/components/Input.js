import React, { Component } from 'react';
import { Form, Icon } from 'react-bulma-components';


class Input extends Component {
  state = {
    error: '',
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

  handleChange = (event) => {
    event.preventDefault();
    if (this.props.required && !event.target.value) {
      this.setState({ error: 'This field is required.' });
    } else {
      this.setState({ error: '' });
    }
    this.props.onChange(event);
  }

  render() {
    return(
      <Form.Field>
        <Form.Control iconLeft={this.props.icon !== undefined}>
          <Form.Input
            name={this.props.name}
            type={this.props.type || 'text'}
            placeholder={this.props.placeholder}
            value={this.props.value}
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