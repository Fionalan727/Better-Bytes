
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

  function ShoppingList() {
    return (
      <Router>
        <div>
          
          {/* Linking the button to the path */}
          <Link to = "/shoppinglist/onestop"> One Store </Link>
          <Link to = "/shoppinglist/bestdeal"> Best Deal </Link>
          
          {/* Linking path to component */}
          <Route path = "/shoppinglist/onestop" component = {Topics} />
          <Route path = "/shoppinglist/bestdeal" component = {About} />
        </div>
      </Router>
    );
  }

  function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  
  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  // handleClick() {
  //   var active = this.state.active;
  //       var newActive = active === 'ONESHOP' ? 'BESTDEAL' : 'ONESHOP';
  //       this.setState({
  //           active: newActive
  //       });
  // }

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


//   render() {    
//     var active = this.state.active;

//     return (
//       <div className="App">
//         <div id="header">
//             <h1>Shopping List</h1>
//             <div>
//                 {active === 'ONESHOP' ? (
//                     <OneShop />
//                 ) : active === 'BESTDEAL' ? (
//                     <BestDeal />
//                 ) : null}
//                 <button type="button" onClick={this.handleClick}>
//                     Toggle
//                 </button>
//             </div>
//           </div>
//       </div>
//     )
//   }
// }

export default ShoppingList;