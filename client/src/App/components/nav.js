import React, { Component } from 'react';
import ItemEntries from './itemEntries';
import SearchedItems from './SearchedItems';

class Nav extends Component {

  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key:''},
    }
  }

  handleInput = e => {
    const itemText = e.target.value; // gets value from input box from the event
    const currentItem = {text : itemText, key: Date.now() } // text is input data key is current data
    this.setState({ // sets the state of object currentItem
      currentItem,
    })
    console.log('Hello Input')
  }

  newItem = e => {
    e.preventDefault () // prevents default on reload
    const newerItem = this.state.currentItem // gets the value in input box from the state of currentItem
    if (newerItem.text !== ''){ // if not blank input, items array is destructed and newerItem is added
      console.log(newerItem)
      const items = [...this.state.items, newerItem]
      this.setState({
        items: items, // items are set to state
        currentItem: { text: '', key: ''}, // resets the currentItem input box
      })
    }
    console.log('Hello New Item')
  }

  render() {
    return (
    <div className="Search">
        <ItemEntries
          newItem={this.newItem} // to handle click on new.
          inputElement={this.inputElement} // to refer to this element
          handleInput={this.handleInput} // to handle data on input field on a change
          currentItem={this.state.currentItem} // to display the value of the state set to currentItem
        />
        <SearchedItems entries={this.state.items}/>
    </div>
    )
  }
}

export default Nav;

