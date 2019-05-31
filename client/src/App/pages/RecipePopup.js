import React, { Component } from 'react';


class RecipePopup extends Component {
    constructor(props){
        super(props);
        this.state = {
          ingredients:[],
          recipeStep: []
        }
      }
      
      // Fetch the list on first mount
      componentDidMount() {
        this.getIngredient();
        this.getStep();
      }
      
      // Retrieves the list of items from the Express app
       getIngredient = () => {
        
        const url = "/api/ingredient/"+this.props.id; // site that doesn’t send Access-Control-*
            fetch( url) 
            .then(res => res.json())
            .then(data => {
            
            this.setState({ ingredients:data })

            })
        
       }

       getStep =()=>{
            fetch("/api/recipesteps/"+this.props.id)
            .then(res => res.json())
            .then(data => {
            console.log("data",data)
            this.setState({ recipeStep:data })

            })
       }
       generateIdTag = () => {
           return "popup-" + this.props.id;
       }
       
    render(){

        const handleOnClick=(evt)=>{
            let clicked = evt.target.id;
            this.props.addId(clicked);
        }

       
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
                            <p>Ingredients:</p>
                            <ul>
                            {this.state.ingredients.map((ingredients) =>{
                                return(
                        
                                 <li>{ingredients.name}</li>

                                )
                            })}
                            </ul>
                            
                            
                        </div>
                        <div>
                            <p>Steps:</p>
                            <ul>
                                {this.state.recipeStep.map((recipeStep) =>{
                                    return(
                                    <li>
                                        <div>
                                            <p>{recipeStep.title}</p>
                                            <img alt="" src={recipeStep.image} className="img-responsive"/> <p>{recipeStep.step}. {recipeStep.description}</p> 
                                        </div>
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" id = {this.props.id} onClick={handleOnClick} className="btn btn-primary">Add to shopping list</button>
                        </div>
                    </div>
                </div>
            </div>
                
            
            
        )
    }
    
}
export default RecipePopup;