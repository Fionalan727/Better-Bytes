import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import Nav from "./components/nav";
import ShoppingList from './list/ShoppingList';

class App extends Component {
  constructor(props){
    super(props);
    // this.addId = this.addId.bind(this);

    this.state = {
      lists:[]

    }
  }
  

   componentDidMount() {
     this.addId();
    }

   addId =(id)=> {
      
    let updatedList = [...this.state.lists, id]
    this.setState({ lists: updatedList})
   }

  render() {
    const {lists} = this.state.lists
    console.log("list now is", this.state)
    const App = () => (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/recipe' component={RecipeList} addId ={this.addId} lists = {lists}/>
          <Route path='/shoppinglist' component={ShoppingList} />
          
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App addId ={this.addId} lists = {lists}/>
      </Switch>
    );
  }
}

export default App;
