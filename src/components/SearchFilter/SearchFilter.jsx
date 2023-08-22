import React from 'react';

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
            onChange={this.props.onStringChange}
          ></input>
        </label>
      </form>
    );
  }
}

export default SearchFilter;
