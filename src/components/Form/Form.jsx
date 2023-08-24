import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

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
    this.props.onSubmit({ ...this.state });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input type="text" name="name" onChange={this.handleChange}></input>
        </label>
        <label className={css.label}>
          Number
          <input type="tel" name="number" onChange={this.handleChange}></input>
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
