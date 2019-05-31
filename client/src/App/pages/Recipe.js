import React, { Component } from 'react';
import RecipePopup from './RecipePopup'
const divStyle = {
    width: '23rem'
  };

class Recipe extends Component {
    

    generateIdTag = () => {
        return "#popup-" + this.props.id
    }
    render(){
        
        return(
             
                <div className="col-md-3">
                    <div className="card" style={divStyle}>
                        <img src={this.props.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <a href="/" data-toggle="modal" data-target={this.generateIdTag()} className="btn btn-primary" >click for more</a>
                        </div>
                     
                        <RecipePopup 
                        addId={this.props.addId}
                        id = {this.props.id}
                        key ={this.props.key}
                        category = {this.props.category}
                        name = {this.props.name}
                        description={this.props.description}
                        cookingTime = {this.props.cookingTime}
                        image = {this.props.image}/>
                    </div>
                </div>
                
            
            
        );
    }
}
export default Recipe;


