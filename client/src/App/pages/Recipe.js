import React, { Component } from 'react';
const divStyle = {
    width: '18rem'
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
                            <a href="/" className="btn btn-primary">click for more</a>
                        </div>
                    </div>
                </div>
                
            
            
        );
    }
}
export default Recipe;


