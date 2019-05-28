import React, { Component } from 'react';
import RecipeFilter from './RecipeFilter'
import Recipe from './Recipe'
class RecipeList extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      data:[],
      recipes: [],
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
      this.setState({ recipes: filteredCat} )
   }

  render() {
    const { recipes } = this.state;
    console.log("recipes now",this.state)
    
    return (
      <div className="App">
        <h1>List of recipe</h1>
        {/* Check to see if any items are found*/}
   
          <div>
            <RecipeFilter
            filterCat = {this.filterCat}/>
            <div className="row">
              {recipes.map((recipe) => {
                return(
                  <Recipe
                  key ={recipe.id}
                  category = {recipe.category_id}
                  name = {recipe.name}
                  description={recipe.description}
                  cookingTime = {recipe.cooking_duration}
                  
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