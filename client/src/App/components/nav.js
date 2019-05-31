import React, { Component } from 'react';
import ItemEntries from './itemEntries';
import SearchedItems from './SearchedItems';

const request = require('request');
const cheerio = require('cheerio');

class Nav extends Component {

  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key:''},
    }
  }

handleInput = e => {
  if (e.key === 'Enter'){
    console.log (e.target.value);
    const itemText = e.target.value; // gets value from input box from the event
    var query = itemText;

  console.log("Metro Prices");
  request(`https://www.metro.ca/en/search?filter=${query}&freeText=true`, (error, response, html) =>{
  if(!error && response.statusCode === 200){
    const $ = cheerio.load(html)

    $('.pi--main-price').each((i, el) => {
      const price = $(el).text();
      // var regexprice = /\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$/mig;
      // var foundprice = price.match(regexprice)[0].trim().slice(1);
      console.log(price)

          });

      $('.pi--main-price span.pi--price').each((i, fl) => {
        const quantity = $(fl).text();
        var unit_quantity = 0;
        if(quantity.includes ("/")){
          unit_quantity = quantity.substring(0, 1);
        } else {
          unit_quantity = 1;
        }
        console.log(unit_quantity)
       });
          $('.pt--name div').each((i, gl) => {
            const name = $(gl).text();
            console.log(name);
          });

  }});


    const currentItem = {text : itemText, key: Date.now() } // text is input data key is current data
    this.setState({ // sets the state of object currentItem
      currentItem,
    })
  }
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

