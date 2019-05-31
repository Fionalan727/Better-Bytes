import React, { Component } from 'react';

class ItemEntries extends Component {

  componentDidUpdate(){

  }

  render() {
    return (
      <div className="itemListMain">
        <form onSubmit={this.props.newItem}>
          <input
              placeholder="Search Items"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
          />
          <button type="submit"> Search Item </button>
        </form>
      </div>
    )
  }
}

export default ItemEntries;