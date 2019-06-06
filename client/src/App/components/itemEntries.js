import React, { Component } from 'react';

class ItemEntries extends Component {
  render() {
   return (
      <div className="itemListMain">
        <form onSubmit={this.props.handleSubmit}>
          <input className="SearchInput" name="query" placeholder="Search Items"/>
          <button className="SearchButton btn btn-outline-info align-self-baseline " type="submit"> Search Item </button>
        </form>
      </div>
    )

  }
}
export default ItemEntries;