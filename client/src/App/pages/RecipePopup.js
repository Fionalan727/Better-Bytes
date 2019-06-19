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
        var styles ={
    
            backgroundImage:'url(' + this.props.image + ')'  ,
            backgroundSize:"cover"

          }

       
        return(   
            <div className="modal  fade" id={this.generateIdTag()} tabIndex="-1" role="dialog" aria-labelledby="popup" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title display-3" id="popup">{this.props.name}</p>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="jumbotron" style={styles}>
                            <div className="container for-about">
                            
                            
                            </div>
                        </div>
                        <div className="pop-content">
                            <p>Prep Time: {this.props.cookingTime} min</p>
                            <div>{this.props.description}</div>
                        </div>
                        <div className="pop-content">
                            <p>Ingredients(for two):</p>
                            <ul>
                            {this.state.ingredients.map((ingredient) =>{
                                let twoServing= (ingredient.quantity_per_person*2)
                                return(
                        
                                 <li>{ingredient.name}: {twoServing} {ingredient.unit} </li>

                                )
                            })}
                            </ul>
                            
                            
                        </div>
                        <div className="pop-content">
                            <p>Steps:</p>
                            <ol>
                                {this.state.recipeStep.map((recipeStep) =>{
                                    return(
                                    <li>
                                        <div>
                                            <div>{recipeStep.title}</div>
                                            <img alt="" src={recipeStep.image} className="img-responsive step-img"/> 
                                            <div> {recipeStep.description}</div> 
                                        </div>
                                    </li>
                                    )
                                })}
                            </ol>
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