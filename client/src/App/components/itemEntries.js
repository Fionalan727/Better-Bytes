import React, { Component } from 'react';

class ItemEntries extends Component {
  render() {
   return (
      <div className="itemListMain">
        <form onSubmit={this.props.handleSubmit}>
          <input name="query" placeholder="Search Items"/>
          <button type="submit"> Search Item </button>
        </form>
      </div>
    )

  }
}
export default ItemEntries;