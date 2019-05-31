import React, { Component } from 'react';

class RecipeFilter extends Component {

    render(){
        const handleclick =(event)=>{
            
            let buttonClicked = event.target.id;
            this.props.filterCat(buttonClicked);
            
        }
        return(
            <div>
                <div>
                    <button className="btn btn-outline-info"id = "1" onClick={handleclick}>Category 1</button>  
                
                
                    <button className="btn btn-outline-info" id = "2" onClick={handleclick}>Category 2</button>  
                
                
                    <button className="btn btn-outline-info" id = "3" onClick={handleclick}>Category 3</button>  
                
                
                    <button className="btn btn-outline-info" id = "4" onClick={handleclick}>Category 4</button>  
                
                
                    <button className="btn btn-outline-info" id = "5" onClick={handleclick}>Category 5</button>  
                </div>
            </div>
        );
    }
}
export default RecipeFilter;