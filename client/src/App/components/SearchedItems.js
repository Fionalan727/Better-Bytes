import React, { Component } from 'react';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'


class SearchedItems extends Component {

  createResults (item) {
    return (
    <SlideDown className={'my-dropdown-slidedown'}>
    <li className="results">{item.id} {item.name}  {"$" + item.price} {"Qty : " + item.quantity}</li>
    </SlideDown>
    )
  }

  render () {
    const itemEntries = this.props.entries;
    const listItems = itemEntries.map(this.createResults)

    return <ul className="thisList">{listItems}</ul>
  }
}

export default SearchedItems;