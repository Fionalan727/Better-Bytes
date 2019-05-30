import React, { Component } from 'react';

class RecipePopup extends Component {
    constructor(props){
        super(props);
        this.state = {
          ingredients:[],
    //    recipeStep: [],
        }
      }
      
      // Fetch the list on first mount
      componentDidMount() {
        this.getIngredient();
      }
      
      // Retrieves the list of items from the Express app
       getIngredient = () => {
        
        const url = "/api/TEST/"+this.props.id; // site that doesn’t send Access-Control-*
            fetch( url) 
            .then(res => res.json())
            .then(data => {
            console.log("data",data)
            this.setState({ ingredients:data })

            })
        
       }

       generateIdTag = () => {
           return "popup-" + this.props.id;
       }
       
    render(){
        const { ingredients } = this.state;
        console.log("this pop up",this.state)
       
        return(   
            <div className="modal fade" id={this.generateIdTag()} tabIndex="-1" role="dialog" aria-labelledby="popup" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="popup">{this.props.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="jumbotron" >
                            <div className="container for-about">
                            <h1 className ="recipeName">{this.props.name}</h1>
                            <p>Prep Time:{this.props.cookingTime}min</p>
                            </div>
                        </div>
                        <div>
                            <p>{this.props.description}</p>
                        </div>
                        <div>
                            <p>Ingredient:</p>
                            <ul>
                            {ingredients.map((ingredient) =>{
                                return(
                        
                                 <li>{ingredient.name}</li>

                                )
                            })}
                            </ul>
                            
                            
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add to shopping list</button>
                        </div>
                    </div>
                </div>
            </div>
                
            
            
        )
    }
    
}
export default RecipePopup;