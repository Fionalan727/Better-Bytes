import React, { Component } from 'react';

class Recipe extends Component {
    render(){
        return(
            <div>
                <p>{this.props.name}</p> 
                <p>duriation:{this.props.cookingTime}min</p> 
            </div>
        );
    }
}
export default Recipe;