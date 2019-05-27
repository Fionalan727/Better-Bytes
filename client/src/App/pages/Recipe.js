import React, { Component } from 'react';

class Recipe extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
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
    fetch( url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(res => res.json())
    .then(data => this.setState({ recipes:data.recipes }))
   }

  render() {
    const { recipes } = this.state;
    console.log(this.state)
    return (
      <div className="App">
        <h1>List of recipe</h1>
        {/* Check to see if any items are found*/}
   
          <div>
            {/* Render the list of items */}
            {recipes.map((recipe) => {
              return(
                <div key={recipe.objectID}>
                  <div>
                    <p>{recipe.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
      
      
      </div>
    );
  }
}

export default Recipe;