import React, { Component } from 'react';

class RecipePopup extends Component {
    
    render(){
        console.log(this);
        //  let url = {this.props.image}
        //  const backgroundstyle = {
        //      backgroundImage:'url('+ url +')'
        //  };
        return(   
            <div class="modal fade" id="popup" tabIndex="-1" role="dialog" aria-labelledby="popup" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 className="modal-title" id="popup">{this.props.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <div class="jumbotron" >
                            <div class="container for-about">
                            <h1 className ="recipeName">{this.props.name}</h1>
                            <p>Prep Time:{this.props.cookingTime}min</p>
                            </div>
                        </div>
                        <div>
                            <p>{this.props.description}</p>
                        </div>
                        <div>
                            <p>Ingredients:{this.props.ingredient}</p>
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