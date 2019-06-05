import React, { Component } from 'react';
import RecipeFilter from './RecipeFilter'
import Recipe from './Recipe'
import { Link } from 'react-router-dom';
class RecipeList extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      data:[],
      recipes: [],
      ingredients: []
    }
  }
  
  // Fetch the list on first mount
  componentDidMount() {
    this.getRecipe();
  }
  
  // Retrieves the list of items from the Express app
   getRecipe = () => {
    
    const url = "/api/recipe"; // site that doesn’t send Access-Control-*
    fetch( url) 
    .then(res => res.json())
    .then(data => {
      console.log("data",data)
      this.setState({ data:data })
      this.setState({recipes:data})
    })
    
   }

   filterCat = (cat)=>{
    let allCat = this.state.data
    let filteredCat = allCat.filter(
      (recipe)=>{
        return recipe.category_id === cat
      })
      this.setState({ recipes: filteredCat})
   }

  render() {
    console.log("recipe after filter",this.state)
   
     const { recipes } = this.state;
    
    return (
      <div className="App">
        <h1 className="display-4 text-center recipe-title">Pick Recipes</h1>
        
          <Link to={'./shoppinglist/onestop/walmart'}>
          <a className="float">
          <i className="fa fa-carrot my-float"></i>
          </a>
          <div className="label-container">
          <div className="label-text">grocery List</div>
          <i className="fa fa-play label-arrow"></i>
          </div>
          </Link>
        
        
        {/* Check to see if any items are found*/}
   
          <div>
            <RecipeFilter
            addId ={this.props.addId}
            filterCat = {this.filterCat}/>
            <div className="recipe-container  row justify-content-around">
              {recipes.map((recipe) => {
                return(
                  <Recipe
                  addId ={this.props.addId}
                  id = {recipe.id}
                  key ={recipe.id}
                  category = {recipe.category_id}
                  name = {recipe.name}
                  description={recipe.description}
                  cookingTime = {recipe.cooking_duration}
                  image = {recipe.image}
                  />
                );
              })}
            </div>
            
          </div>
      
      
      </div>
    );
  }
}

export default RecipeList;