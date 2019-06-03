
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneShop from "./OneShop";
import BestDeal from "./BestDeal";

// class ShoppingList extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         active: 'ONESHOP',
//         recipes: [],
//         ingredients: [],
//         numOfPeople: 2,
//         store: '',
//         total: 1234,
//     };
//   }

  function ShoppingList({lists}) {
    // props is generated everytime a route is made
    return (
      <Router>
        <div>

          <div>
            <h1> Shopping List </h1>
          </div>

          <div>
            {/* Linking the button to the path */}
            <Link to = "/shoppinglist/onestop"> One Store </Link>
            <Link to = "/shoppinglist/bestdeal"> Best Deal </Link>
            {/* Linking path to component */}
            <Route path = "/shoppinglist/onestop" render={(props) => <Stores {...props} lists={lists}/>} />
            <Route path = "/shoppinglist/bestdeal" component = {Deal} />
          </div>

        </div>
      </Router>
    );
  }

  function Stores(props) {
    console.log('coming from stores', props);
    let match = props.match;
    return (
      <div>
        <h2>Stores</h2>
        <ul>
          <li>
            <Link to={`${match.url}/1`}> Walmart </Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}> Loblaws </Link>
          </li>
          <li>
            <Link to={`${match.url}/3`}> Metro </Link>
          </li>
        </ul>
        <Route path={`${match.path}/:storeId`} render={(ps) => <Store {...ps} lists={props.lists}/>}/>
        {/* <Route exact path={match.path} render={() => <h3>Please select a store.</h3>} /> */}
      </div>
    );
  }
  
  function Store(props) {
    console.log('coming from STORE', props);
    let match = props.match;
    return (
      <div>
        <h2>{match.params.storeId}</h2>
        <OneShop storeId={match.params.storeId} lists={props.lists}/>
      </div>
    );
  }
  
  function Deal() {
    return (
      <div>
        <h2>Best Deal</h2>
        <BestDeal />
      </div>
    );
  }

export default ShoppingList;