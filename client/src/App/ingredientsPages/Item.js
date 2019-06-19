import React, { Component } from 'react';

// From OneShop.js: 
// item: {ingredientId: 8, unitsNeeded: 2, totalPerIngredient: 7.94}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            name: '',
            image: ''
        }
        this.fetchNameImage = this.fetchNameImage.bind(this);
    }
    
    //Called after render()
    componentDidMount(){
        this.fetchNameImage();
    }

    //fetch the ingredient name and image from props.item
    fetchNameImage() {
        const url = "/api/image/" + this.state.item.id; 
        fetch(url) 
        .then(res => res.json())
        .then(data => {
            let name = data[0].name;
            let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            this.setState({name: capitalizedName});
            this.setState({image: data[0].image});
            // console.log('name', this.state.name);
            // console.log('image', this.state.image);
        })
    }

    render() {
        // console.log(this.props.recipes)
        return (
            <div className="card itemjs-card-style">
                <div className="item-box">
                    <div>
                        <p><b>{this.state.name}</b></p>
                    </div>
                    
                    <div>
                        <img className="ingredient-image-size" src={this.state.image} />
                    </div>

                    <div>
                        <p>Buy <b>{this.props.item.units}</b></p>
                    </div>

                    <div>
                        <p>For <b>${this.props.item.totalPerIngredient}</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;