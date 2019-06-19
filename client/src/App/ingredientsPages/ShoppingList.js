
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Walmart from "./Walmart";
import Loblaws from "./Loblaws";
import Metro from "./Metro";

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: this.props.lists
    }
    // this.addId = this.addId.bind(this);
  }

//    addId =(id)=> {
//     let updatedList = [...this.state.lists, id]
//     this.setState({ lists: updatedList})
//    }

  render() {
    const lists = this.state.lists
    console.log("list now is", this.state)
    return (
        <div className="shoppinglist-overall"> 
            <h1><b>Where would you like to go?</b></h1>
            <div>
                <div className="list-inline shopping-overall-stores">
                    <div className="list-inline-item">
                        <Link to = "/shoppinglist/onestop/walmart"><button className= "btn btn-primary">Walmart</button></Link>
                    </div>
                    <div className="list-inline-item">
                        <Link to = "/shoppinglist/onestop/loblaws"><button className= "btn btn-primary">Loblaws</button> </Link>
                    </div>
                    <div className="list-inline-item">
                        <Link to = "/shoppinglist/onestop/metro"> <button className= "btn btn-primary">Metro </button></Link>
                    </div>
                </div>
                    <Route path = "/shoppinglist/onestop/walmart" render={() => <Walmart lists={this.props.lists}/>}/>
                    <Route path = "/shoppinglist/onestop/loblaws" render={() => <Loblaws lists={this.props.lists}/>}/>
                    <Route path = "/shoppinglist/onestop/metro" render={() => <Metro lists={this.props.lists}/>}/>
            </div>
      </div>
    );
  }
}

export default ShoppingList;