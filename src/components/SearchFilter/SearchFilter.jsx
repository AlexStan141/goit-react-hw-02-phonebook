import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';

class SearchFilter extends React.Component {
  state = {
    filterString: '',
  };

  render() {
    return (
      <form>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filterString"
            className={css.input}
            onChange={this.props.onStringChange}
          ></input>
        </label>
      </form>
    );
  }
}

SearchFilter.propTypes = {
  onStringChange: PropTypes.func.isRequired,
};

export default SearchFilter;
