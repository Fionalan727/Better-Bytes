import React, { Component } from 'react';
import RecipePopup from './RecipePopup'
const divStyle = {
    width: '23rem'
  };

class Recipe extends Component {
    render(){
        return(
             
                <div className="col-md-3">
                    <div className="card" style={divStyle}>
                        <img src={this.props.url} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <a href="/" data-toggle="modal" data-target="#popup"className="btn btn-primary">click for more</a>
                        </div>
                     
                        <RecipePopup 
                        key ={this.props.id}
                        category = {this.props.category_id}
                        name = {this.props.name}
                        description={this.props.description}
                        cookingTime = {this.props.cooking_duration}/>
                    </div>
                </div>
                
            
            
        );
    }
}
export default Recipe;


