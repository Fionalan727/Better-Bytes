import React, { Component } from 'react';
import Item from "./Item";

// ORDER OF THE METHODS IN REACT (below)
// componentWillMount()
// set the initial state in the constructor
// render()
// componentDidMount()
// setState()
// render()

class OneShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfPortions: 2,
            store: this.props.storeId,
            recipes: this.props.lists,
            needIngredients: [{ingredientId:2, quantity_per_person:2}, {ingredientId:8, quantity_per_person:300}], //[ingredient id, quantity needed]
            buyIngredients: [{ingredientId: 8, unitsNeeded: 2, totalPerIngredient: 7.94}, {ingredientId: 2, unitsNeeded: 1, totalPerIngredient: 1.00}], //[ingredient id, number of units needed, total price per item]
            total: 0
        }
        this.fetchIngredientQuantity = this.fetchIngredientQuantity.bind(this);
        this.fetchIngredientPrice = this.fetchIngredientPrice.bind(this);
        this.findTotal = this.findTotal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //Called before render()
    componentWillMount(){
        // console.log('First this called');
        // console.log('recipes', this.state.recipes);
        // console.log('store', this.state.store);
        // this.fetchIngredientQuantity();
        // this.fetchIngredientPrice();
        // this.findTotal();
    }

    //Called after render()
    componentDidMount(){
        // console.log('COMPONENTDIDMOUNT()');
        this.fetchIngredientQuantity();
        this.fetchIngredientPrice();
        this.findTotal();
    }

    //-------------------------------------------------------------------------------
    // CALCULATE THE QUANTITY OF EACH INGREDIENT NEEDED (FROM RECIPE)
    //-------------------------------------------------------------------------------
    //Helper Function 
    //Input: Recipes 
    //Output: Array for each Recipe: [{ingredient_id, quantity_per_person}, {}, {}]
    fetchIngredientQuantity() {
        let ingredientsForAllRecipes = [];
        // let uniqueIngredientsList = [];
        this.state.recipes.map((recipeId) => {
            const url = "/api/quantity/"+recipeId; 
            fetch(url) 
            .then(res => res.json())
            .then(data => {
            // console.log('data', data)
            // ingredientsForAllRecipes.push(data);
                for (let j in data) {
                    let shared = false;
                    for (let i in ingredientsForAllRecipes) {
                        if (data[j].ingredientId == ingredientsForAllRecipes[i].ingredientId) {
                            shared = true;
                            let a = Number(ingredientsForAllRecipes[i].quantity_per_person);
                            let b = Number(data[j].quantity_per_person);
                            // console.log('a', a);
                            // console.log('b', b);
                            ingredientsForAllRecipes[i].quantity_per_person = a + b;

                            // uniqueIngredientsList.push(ingredientsForAllRecipes[j]);
                            // console.log('111111111111', ingredientsForAllRecipes);
                            // console.log('added up', ingredientsForAllRecipes[i].quantity_per_person);
                            // console.log('type of', typeof(ingredientsForAllRecipes[i].quantity_per_person));
                            // console.log('111111111111', ingredientsForAllRecipes);
                        } 
                    }
                    if(!shared) {
                        ingredientsForAllRecipes.push(data[j]);
                    }
                }
            this.setState({needIngredients: ingredientsForAllRecipes});
            console.log('needIngredients', this.state.needIngredients);
            // console.log('ingredientsForAllRecipes each time', ingredientsForAllRecipes);
            })
        })
    }
    //-------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------
    // CALCULATE THE UNITS NEEDED TO BUY FROM GROCERY STORE
    //-------------------------------------------------------------------------------
    // 1) Fetch the data for [ingredient id, per unit price] using store and needIngredients states
    // 2) For each ingredient, calculate how many units are needed based on needIngredient state
    // 3) For each ingredient, calculate how much is the per item type cost
    // 4) Update the state of buyIngredients [ingredient id, number of units needed, total price per item]
   
    //data: [store.name, ingredients.id, store_ingredient.price]
    //needIngredients: [ingredient id, quantity needed]
    
    fetchIngredientPrice() {
        let list = [];
        let ingredients = this.state.needIngredients;
        console.log('fetchIngredientPrice() ingredients', ingredients);

        for (let i in ingredients) {
            list.push(ingredients[i].ingredientId);
        }
        console.log('list of ingredients', list);

        list.map((ingredientId) => {
            var temp = [];
            const url = "/api/price/"+ingredientId; 
            fetch(url) 
            .then(res => res.json())
            .then(data => {
                //data here: 
                //[{"ingredientId":3,"store":1,"price":"0.75","quantity_per_item":1},
                //{"ingredientId":3,"store":2,"price":"7.99","quantity_per_item":10},
                //{"ingredientId":3,"store":3,"price":"3.99","quantity_per_item":10}]
                for (let i in data) {
                    // console.log("HEREEEEEEEEEE I AMMMMMMMMM")
                    // console.log(data);
                    // console.log(data[i].store);
                    // console.log(this.state.store);

                    //find how many units are needed per ingredient
                    //find the right store's price of ingredient
                    if (data[i].store == this.state.store) {  // match the store id from data
                        for (let k in this.state.needIngredients) { // loop through needIngredients 
                            let newObj = {};
                            if (data[i].ingredientId == this.state.needIngredients[k].ingredientId) {  // match ingredients
                                // state variables to be used here to calculate quantity to buy
                                let ingredientId = data[i].ingredientId;
                                let quantityForRecipesPerPerson = this.state.needIngredients[k].quantity_per_person;
                                let quantityForRecipesForAll = quantityForRecipesPerPerson * this.state.numberOfPortions;
                                let quantityInStore = data[i].quantity_per_item;
                                let unitIngredientPrice = data[i].price;
                                let unitsNeeded = 0;
                                console.log('quantityForRecipesPerPerson', quantityForRecipesPerPerson);
                                console.log('quantityForRecipesForAll', quantityForRecipesForAll);
                                console.log('quantityInStore', quantityInStore);
                                console.log('unitIngredientPrice', unitIngredientPrice);

                                // calculate how many units of an ingredient to buy
                                if (quantityForRecipesForAll > quantityInStore) {
                                    if (quantityForRecipesForAll % quantityInStore != 0) {
                                        unitsNeeded = Math.floor(quantityForRecipesForAll / quantityInStore) + 1;
                                        console.log('Case for MORE but uneven amount', unitsNeeded);
                                    } else {
                                        unitsNeeded = Math.floor(quantityForRecipesForAll / quantityInStore);
                                        console.log('Case for MORE but even amount', unitsNeeded);
                                    }
                                } 
                                
                                if (quantityForRecipesForAll <= quantityInStore) {
                                    unitsNeeded = 1;
                                    console.log("Case for EQUAL or LESS", unitsNeeded);
                                }

                                // set the new data into newObj
                                newObj.ingredientId = ingredientId;
                                newObj.unitsNeeded = unitsNeeded;
                                newObj.totalPerIngredient = unitsNeeded * unitIngredientPrice;

                                // push to temp array
                                temp.push(newObj);
                                console.log('should contain each ingredientid, units, price', temp);
                            }
                        }
                    }
                }
                this.setState({buyIngredients: temp});
                console.log('buyIngredients', this.state.buyIngredients);
            })
        })
    }
         
    //-------------------------------------------------------------------------------
    

    //-------------------------------------------------------------------------------
    // USER CHANGE NUMBER OF PORTIONS (aka. people on the user interface)
    //-------------------------------------------------------------------------------
    // 1) Create a Event Handler on the UI
    // 2) When User Selects from Dropdown, 1 - 10 people 
    // 3) Update state of numOfPortions to reflect this number
    // 4) Create a function that set default value to 2 portions
    // 5) Create a function that changes the calcuation of the state for needIngredients
    handleChange(e) {
        let userInput = Number(e.target.value);
        this.setState({ numberOfPortions: userInput });
    }

    //-------------------------------------------------------------------------------



    //-------------------------------------------------------------------------------
    // REMOVE AN ITEM ON THE SHOPPING LIST
    //-------------------------------------------------------------------------------
    // 1) Create a Event Handler on the UI to Click Delete



    //-------------------------------------------------------------------------------



    //-------------------------------------------------------------------------------
    // CALCULATE THE TOTAL COST OF A SHOPPING LIST
    //-------------------------------------------------------------------------------  
    
    findTotal() {
        let temp = 0;
        for (let i in this.state.buyIngredients) {
            let ingredientTotal = Number(this.state.buyIngredients[i].totalPerIngredient);
            temp += ingredientTotal;
        }
        let newTemp  = temp.toFixed(2);
        console.log('total', newTemp);
        this.setState ({total: newTemp});
    }

    //-------------------------------------------------------------------------------



    //-------------------------------------------------------------------------------
    // SEND THE SHOPPING LIST THROUGH TEXT
    //-------------------------------------------------------------------------------




    //-------------------------------------------------------------------------------
    

    render() {
        // console.log(this.props.storeName)
        // console.log(this.props.recipes)
        // ShoppingItem = (props) => {
        //     const numbers = props.ingredients;
        //     const AllItems = numbers.map((number) =>
        //       <Item key={number.toString()}
        //                 value={number} />
        //     );

            return (
                <div>
                    {this.state.store}
                    {this.state.recipes}

                    <p>number of portions</p>
                    {this.state.numberOfPortions}

                    <h1>One Stop Shop!</h1>

                    {/* <input value={this.state.numberOfPortions} onChange={event => this.setState({numberOfPortions: event.target.value.replace(/\D/,'')})}/> */}

                    <input onChange={this.handleChange} placeholder="How many people?" />

                    {this.state.buyIngredients.map((item) =>
                        <Item item={item} /> 
                    )}
                
                    {this.state.total}
                </div>
            );
    }
}

export default OneShop;
