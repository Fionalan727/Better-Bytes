import React, { Component } from 'react';
import RecipePopup from './RecipePopup'
const divStyle = {
    width: '14rem'
  };

class Recipe extends Component {
    

    generateIdTag = () => {
        return "#popup-" + this.props.id
    }
    render(){
        
        return(
             
                <div className="card-deck col-md-4">
                    <div className="card" style={divStyle}>
                        <img src={this.props.image} className="card-img-top" alt="..."/>
                        <div className="prep-time"><i class="far fa-clock"></i>{this.props.cookingTime}min</div>
                        <div className="card-body d-flex flex-column text-center ">
                            <h5 className="card-title">{this.props.name}</h5>
                            <div className="info-div">
                                <a  data-toggle="modal" data-target={this.generateIdTag()} className="btn btn-outline-info align-self-baseline " >click for more</a>
                            </div>
                               
                        
                            
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


