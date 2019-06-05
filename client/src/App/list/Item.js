// import React, { Component } from 'react';

// // From OneShop.js: 
// // item: {ingredientId: 8, unitsNeeded: 2, totalPerIngredient: 7.94}

// class Item extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             item: this.props.item,
//             name: '',
//             image: ''
//         }
//         this.fetchNameImage = this.fetchNameImage.bind(this);
//     }
    
//     //Called after render()
//     componentDidMount(){
//         this.fetchNameImage();
//     }

//     //fetch the ingredient name and image from props.item
//     fetchNameImage() {
//         const url = "/api/image/" + this.state.item.ingredientId; 
//         fetch(url) 
//         .then(res => res.json())
//         .then(data => {
//             this.setState({name: data[0].name});
//             this.setState({image: data[0].image});
//             console.log('name', this.state.name);
//             console.log('image', this.state.image);
//         })
//     }

//     render() {
//         // console.log(this.props.recipes)
//         return (
//             <div>
//                 <ul>
//                     <p>{this.state.name}</p>
//                     <img src={this.state.image} />
//                     <p>{this.props.item.unitsNeeded}</p>
//                     <p>${this.props.item.totalPerIngredient}</p>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Item;

// // Remove an Item from the List
// {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}