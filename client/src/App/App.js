import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import Nav from "./components/nav";
import ShoppingList from './list/ShoppingList';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/recipe' component={RecipeList}/>
          <Route path='/shoppinglist' component={ShoppingList}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
