
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
            <h1><b>Shopping List</b></h1>
            <div>
                <ul className="list-inline">
                    <ol className="list-inline-item">
                        <Link to = "/shoppinglist/onestop/walmart"><button className= "btn btn-primary">Walmart</button></Link>
                    </ol>
                    <ol className="list-inline-item">
                        <Link to = "/shoppinglist/onestop/loblaws"><button className= "btn btn-primary">Loblaws</button> </Link>
                    </ol>
                    <ol className="list-inline-item">
                        <Link to = "/shoppinglist/onestop/metro"> <button className= "btn btn-primary">Metro </button></Link>
                    </ol>
                </ul>
                    <Route path = "/shoppinglist/onestop/walmart" render={() => <Walmart lists={this.props.lists}/>}/>
                    <Route path = "/shoppinglist/onestop/loblaws" render={() => <Loblaws lists={this.props.lists}/>}/>
                    <Route path = "/shoppinglist/onestop/metro" render={() => <Metro lists={this.props.lists}/>}/>
            </div>
      </div>
    );
  }
}

export default ShoppingList;