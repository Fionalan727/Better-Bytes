import React, { Component } from 'react';

class SearchedItems extends Component {

  createResults (item) {
    return <li className="results">{item.id} {item.name}  {"$" + item.price} {"Qty : " + item.quantity}</li>
  }

  render () {
    const itemEntries = this.props.entries;
    const listItems = itemEntries.map(this.createResults)

    return <ul className="thisList">{listItems}</ul>
  }
}

export default SearchedItems;