import React from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ ...this.state });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" name="name" onChange={this.handleChange}></input>
        </label>
        <label>
          Number
          <input type="tel" name="number" onChange={this.handleChange}></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
