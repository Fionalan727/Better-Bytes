import React, { Component } from 'react';
import Item from "./Item";

class Loblaws extends Component {
    constructor(props){
        super(props);
        this.state = {
          numberOfPortions: 2,
          recipes: this.props.lists,
          storeId: 1,

          //separated by recipes
          needIngredients: [], 

          //RECIPES
          //ingredients quantity added up (for multiple recipes)
          uniqueIngredients: [],

          //STORE
          //store information of group of ingredients
          priceIngredients: [],

          //ingredients price & quantity adjustment for multiple people
          buyIngredients: [],

          total: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchIngredientQuantity = this.fetchIngredientQuantity.bind(this);
        this.addIngredientQuantity = this.addIngredientQuantity.bind(this);
        this.fetchIngredientPrice = this.fetchIngredientPrice.bind(this);
        this.addIngredientPrice = this.addIngredientPrice.bind(this);
        this.findTotal = this.findTotal.bind(this);
    }

    componentDidMount() {
        // console.log("COMPONENT WILLMOUNT is called")
        // console.log('A');
        // console.log('state:',this.state);
        this.fetchIngredientQuantity().then(() => {
            // console.log('C');
            this.addIngredientQuantity().then(() => {
                // console.log('F');
                this.fetchIngredientPrice().then(() => {
                    // console.log('H');
                    this.addIngredientPrice().then(() => {
                        // console.log('J');
                        this.findTotal();
                    });
                });
            });
        });
    }

    //-------------------------------------------------------------------------------
    // FETCH ALL INGREDIENTS FROM ALL RECIPES
    // OUTPUT: SET STATE OF NEEDINGREDIENTS TO
    // [
    //  0: [{ingredient_id, quantity_per_person}, {}, {} ]
    //  1: [{ingredient_id, quantity_per_person}, {}, {} ]
    // ]
    //-------------------------------------------------------------------------------

    fetchIngredientQuantity = () => {
        // console.log('B');
        let all = [];

        return Promise.all(
            this.state.recipes.map((recipeId) => {
                return fetch("/api/quantity/"+recipeId) 
                .then(res => res.json())
                .then(data => all.push(data))
            })
        ).then(() => {
            this.setState({ needIngredients: all })
            Promise.resolve();
        })
    }

    //-------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------
    // ADD UP THE QUANTITY OF EACH INGREDIENT NEEDED (FOR ONE PERSON)
    // OUTPUT: SET STATE OF UNIQUEINGREDIENTS TO
    // [{ingredientId, ADDED quantity_per_person}, {}, {}]
    // -------------------------------------------------------------------------------
    addIngredientQuantity = () => {
        // console.log('D');
        return new Promise((resolve) => {
            // console.log('E');
            let all = [];
            let list = this.state.needIngredients;
            for(let recipeId of list) {
                for(let i in recipeId) {
                    let shared = false;
                    // console.log('i', i)
                    for (let j in all) {
                        // console.log('j', i)
                        if(recipeId[i].ingredientId == all[j].ingredientId) {
                            shared = true;
                            let a = Number(recipeId[i].quantity_per_person);
                            let b = Number(all[j].quantity_per_person);
                            all[j].quantity_per_person = a + b;
                        }
                    }
                    if(!shared) {
                        all.push(recipeId[i]);
                    }
                }
            }
            this.setState({ uniqueIngredients: all });
            resolve();
        });
    }
    //-------------------------------------------------------------------------------



    //-------------------------------------------------------------------------------
    // FETCH INGREDIENT PRICE FOR WALMART ONLY (storeId = 1)
    // OUTPUT: SET STATE OF PRICEINGREDIENTS
    // 
    // 
    //-------------------------------------------------------------------------------
    
    // Demo of .reduce
    // const y = [1,2,3].reduce((sum, i) => sum += i);
    // y = 6

    // Demo of .map
    // const z = [1,2,3].map(i => console.log(i));
    // 1
    // 2
    // 3

    // Demo of .filter
    // const x = [1,2,3,4].filter(i => x % 2 === 0)
    // x = [2,4]

    fetchIngredientPrice = () => 
        new Promise((resolve) => 
            Promise.all(this.state.uniqueIngredients.map(
                ingredient => fetch("/api/price/"+ingredient.ingredientId) 
                    .then(res => res.json())
                    .then(data => data.reduce(
                        (selected, item) => 
                            item.store == 2
                                ? item
                                : selected
                        , {}
                    ))
            )).then(priceIngredients => {
                this.setState({ priceIngredients });
                resolve(priceIngredients);
            })
        );
    
    //-------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------
    // FETCH INGREDIENT PRICE FOR ALL STORES
    // OUTPUT: SET STATE OF PRICEINGREDIENTS
    //-------------------------------------------------------------------------------
    // fetchIngredientPrice2() {
    //     let all = [];
    //     let list = this.state.uniqueIngredients;
    //     for(let i in list) {
    //         const url = "/api/price/"+list[i].ingredientId; 
    //             fetch(url) 
    //             .then(res => res.json())
    //             .then(data => all.push(data))
    //             .then(this.setState({ priceIngredients: all }))
    //     }
    // }
    //-------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------
    // CALCULATE INGREDIENT PRICE & QUANTITY (FOR MULTIPLE PEOPLE)
    // 
    //-------------------------------------------------------------------------------
    addIngredientPrice= () => {
        // console.log("RAN ADD INGREDIENT PRICE")
        return new Promise((resolve) => {
            let all = [];
            let portions = this.state.numberOfPortions;
            let fromRecipes = this.state.uniqueIngredients;
            let fromStores = this.state.priceIngredients;

            //find how many units are needed per ingredient
            //find the price of each ingredient
            
            // console.log(fromRecipes)
            // console.log('merp', fromStores);
            // console.log('merp', fromRecipes);
                for(let i in fromRecipes) {
                let newObj = {};
                for(let j in fromStores) {
                    if(fromRecipes[i].ingredientId == fromStores[j].ingredientId) {
                        let ingredientId = fromRecipes[i].ingredientId;
                        let unitIngredientPrice = fromStores[j].price;
                        let a = Number(fromRecipes[i].quantity_per_person);
                        let b = Number(fromStores[i].quantity_per_item);
                        let c = a * portions; //total quantity for all people for all recipes
                        let unitsNeeded = 0;

                        //calculate how many units of an ingredient to buy
                        if (c > b) {
                            if (c % b != 0) {
                                unitsNeeded = Math.floor(c / b) + 1;
                                // console.log('Case for MORE but uneven amount', unitsNeeded);
                            } else {
                                unitsNeeded = Math.floor(c / b);
                                // console.log('Case for MORE but even amount', unitsNeeded);
                            }
                        }
                        if (c <= b) {
                            unitsNeeded = 1;
                            // console.log("Case for EQUAL or LESS", unitsNeeded);
                        }

                        // set the new data into newObj
                        newObj.id = ingredientId;
                        newObj.units = unitsNeeded;
                        newObj.totalPerIngredient = (unitsNeeded * unitIngredientPrice).toFixed(2);
                        // console.log("newobj", newObj);

                        // push to temp array
                        all.push(newObj);
                    }
                }   
            }
            this.setState({ buyIngredients: all });
            resolve();
        });
    }
    //-------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------
    // CALCULATE THE TOTAL COST OF A SHOPPING LIST
    //-------------------------------------------------------------------------------  
    
    findTotal = () => {
        return new Promise((resolve) => {
            let totalPrice = 0;
            for (let i in this.state.buyIngredients) {
                let ingredientTotal = Number(this.state.buyIngredients[i].totalPerIngredient);
                totalPrice += ingredientTotal;
            }
            totalPrice = totalPrice.toFixed(2);
            this.setState ({total: totalPrice});
            resolve();
        });
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
    handleChange = (e) => {
        if (e.key === 'Enter') {
            let userInput = Number(e.target.value);
            this.setState({ numberOfPortions: userInput });
            this.addIngredientPrice().then(() => {
                this.findTotal();
            });
        }
    }
    //-------------------------------------------------------------------------------

    render() {
        console.log('Walmart.js @render state', this.state)
        return(
            <div>
            <div className="input-people-div">
                <input className="input-people" onKeyDown={this.handleChange} placeholder="For 2 people" />
            </div>
    
            <h1 className="totalprice-style">Total Price at <b>Loblaws</b> is <b>${this.state.total}</b></h1>

            <div className="item-content">
                {this.state.buyIngredients.map((item) =>
                        <Item item={item} /> 
                )}
            </div>
        </div>
        );
    }
}

export default Loblaws;
