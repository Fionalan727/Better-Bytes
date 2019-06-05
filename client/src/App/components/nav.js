import React, { Component } from 'react';
import ItemEntries from './itemEntries';
import SearchedItems from './SearchedItems';
import '../App.css';

class Nav extends Component {

  constructor(){
    super()
    this.state = {
      items: [],
      currentItem:"",
      data: [],
      searchData: [],
    }
  }

  componentDidMount() {
    // this.getSearch();
  }

  getSearch = (query) => {
    const url = "http://localhost:5000/api/search/" + query;
    console.log("This is url ", url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("Data", data)
      this.setState({ data:data })
      this.setState({searchData:data})
      console.log(this.state.searchData)
    })

    }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.query.value);
    let inputValue = event.target.query.value;
    this.newItem(inputValue);
    event.target.query.value = "";

    this.getSearch(inputValue);

    // const itemText = this.state.currentItem.text; // gets value from input box from the event
    // const currentItem = itemText // text is input data key is current data
    //   console.log (currentItem);

    // this.setState({ // sets the state of object currentItem
    //   currentItem,
    // })

  }

  // handleInput = e =>{
  //   this.setState({currentItem: e.target.value})
  // }

  newItem = (e) => {
    console.log("the value is",e)
    const newerItem = e // gets the value in input box from the state of currentItem
    if (newerItem.text !== ''){ // if not blank input, items array is destructed and newerItem is added
      console.log("This is also newerItem : ", newerItem);
      this.setState({
        // items: [...this.state.items,e], // items are set to state
         currentItem: newerItem
         // resets the currentItem input box
      })
    }
  }

  render() {
    console.log('current item', this.state.searchData);

    return (
      <div className="Search">
        <ItemEntries
          newItem={this.newItem} // to handle click on new.
          inputElement={this.inputElement} // to refer to this element
          handleInput={this.handleInput} // to handle data on input field on a change
          currentItem={this.state.currentItem} // to display the value of the state set to currentItem
          handleSubmit={this.handleSubmit}
        />
        <SearchedItems entries={this.state.searchData}/>
      </div>
    )
  }
}

export default Nav;


