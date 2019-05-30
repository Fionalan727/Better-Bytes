import React, { Component } from 'react';
import OneShop from "./OneShop";
import BestDeal from "./BestDeal";

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
        active: 'ONESHOP',
        recipes: [],
        ingredients: [],
        numOfPeople: 2,
        store: '',
        total: 1234,
    };
  }

  handleClick() {
    var active = this.state.active;
        var newActive = active === 'ONESHOP' ? 'BESTDEAL' : 'ONESHOP';
        this.setState({
            active: newActive
        });
  }

  //changeStore() {}
  //this.setState({store: Walmart})

  //Retrieve ingredient information from database
  //given an array of num of people and recipe id
  //return ingredient id, ingredient name, ingredient image,
  //ingredient unit, quantity_per_person 
//   getIngredientInfo = () => {
//   }

  //Retrieve price information from database
  //given ingredient id from the first retrieval
  //return store_id and price
//   getPrice = () => {
//   }


  //Total quantity for an item 
  //take the 

  //Total price of each item 
  //


  render() {    
    var active = this.state.active;

    return (
      <div className="App">
        <div id="header">
            <h1>Shopping List</h1>
            <div>
                {active === 'ONESHOP' ? (
                    <OneShop />
                ) : active === 'BESTDEAL' ? (
                    <BestDeal />
                ) : null}
                <button type="button" onClick={this.handleClick}>
                    Toggle
                </button>
            </div>
          </div>
      </div>
    )
  }
}

export default ShoppingList;