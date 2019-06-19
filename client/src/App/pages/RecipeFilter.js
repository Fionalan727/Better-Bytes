import React, { Component } from 'react';

class RecipeFilter extends Component {

    render(){
        const handleclick =(event)=>{
      
            let buttonClicked = event.target.id;
            this.props.filterCat(buttonClicked);
            console.log("button clicked now", buttonClicked)
            
        }
        return(
            <div className="button-group">
                <div>
                    <button className="round-button"  id = "1" onClick={handleclick}>Most Popular</button>  
                
                
                    <button  className="round-button"  id = "2" onClick={handleclick}>Vegetarian</button>  
                
                
                    <button className="round-button" id = "3" onClick={handleclick}>Dairy Free</button>  
                
                
                    <button className="round-button"  id = "4" onClick={handleclick}>Budget Friendly</button>  
                
                
                    <button className="round-button"  id = "5" onClick={handleclick}>Easy Prep</button>  
                </div>
            </div>
        );
    }
}
export default RecipeFilter;