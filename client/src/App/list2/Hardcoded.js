import React, { Component } from 'react';

class Loblaws extends Component {
    constructor(props){
        super(props);
        this.state = {
          numberOfPortions: 2,
          recipes: this.props.lists,
          storeId: 1,

          //separated by recipes
          needIngredients: [
            [{"ingredientId":18,"quantity_per_person":"150.00"},{"ingredientId":19,"quantity_per_person":"1.00"},{"ingredientId":20,"quantity_per_person":"0.50"},{"ingredientId":8,"quantity_per_person":"70.00"},{"ingredientId":2,"quantity_per_person":"0.50"},{"ingredientId":21,"quantity_per_person":"39.00"}], 
            [{"ingredientId":22,"quantity_per_person":"150.00"},{"ingredientId":2,"quantity_per_person":"0.50"},{"ingredientId":4,"quantity_per_person":"0.50"},{"ingredientId":8,"quantity_per_person":"70.00"},{"ingredientId":23,"quantity_per_person":"0.50"}]
          ], 

          //RECIPES
          //ingredients quantity added up (for multiple recipes)
          uniqueIngredients: [
            {ingredientId: 18, quantity_per_person: "150.00"}, {ingredientId: 19, quantity_per_person: "1.00"}, {ingredientId: 20, quantity_per_person: "0.50"}, {ingredientId: 8, quantity_per_person: 140}, {ingredientId: 2, quantity_per_person: 1}, {ingredientId: 21, quantity_per_person: "39.00"}, {ingredientId: 22, quantity_per_person: "150.00"}, {ingredientId: 4, quantity_per_person: "0.50"}, {ingredientId: 23, quantity_per_person: "0.50"}
          ],

          //STORE
          //store information of group of ingredients
          priceIngredients: [
              {ingredientId: 18, store: 1, price: "13.26", quantity_per_item: 1000}, {ingredientId: 19, store: 1, price: "0.92", quantity_per_item: 1}, {ingredientId: 20, store: 1, price: "0.67", quantity_per_item: 1}, {ingredientId: 8, store: 1, price: "3.97", quantity_per_item: 283}, {ingredientId: 2, store: 1, price: "1.57", quantity_per_item: 1}, {ingredientId: 21, store: 1, price: "10.67", quantity_per_item: 4000}, {ingredientId: 22, store: 1, price: "4.97", quantity_per_item: 450}, {ingredientId: 4, store: 1, price: "1.49", quantity_per_item: 1}, {ingredientId: 23, store: 1, price: "1.97", quantity_per_item: 1}
          ],

          //ingredients price & quantity adjustment for multiple people
          buyIngredients: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchIngredientQuantity = this.fetchIngredientQuantity.bind(this);
        this.addIngredientQuantity = this.addIngredientQuantity.bind(this);
        this.fetchIngredientPrice = this.fetchIngredientPrice.bind(this);
        this.addIngredientPrice = this.addIngredientPrice.bind(this);
    }


    componentWillMount() {
        console.log("COMPONENT WILLMOUNT is called")
        // this.fetchIngredientQuantity();
        // this.addIngredientQuantity();
        // this.fetchIngredientPrice();
        this.addIngredientPrice();

        // var promise = new Promise( (resolve, reject) => {
        //     this.fetchIngredientQuantity();
        // });
        // promise.then(result => {
        //     this.addIngredientQuantity();
        // });
    }

    // componentDidUpdate() {
    //     console.log("COMPONENT DIDUPDATE is called")
    // }

    componentDidMount() {
        console.log("COMPONENT DIDMOUNT is called")
    }


    //-------------------------------------------------------------------------------
    // FETCH ALL INGREDIENTS FROM ALL RECIPES
    // OUTPUT: SET STATE OF NEEDINGREDIENTS TO
    // [
    //  0: [{ingredient_id, quantity_per_person}, {}, {} ]
    //  1: [{ingredient_id, quantity_per_person}, {}, {} ]
    // ]
    //-------------------------------------------------------------------------------
    
    fetchIngredientQuantity() {
        let all = [];
        this.state.recipes.map((recipeId) => {
            const url = "/api/quantity/"+recipeId; 
                fetch(url) 
                .then(res => res.json())
                .then(data => all.push(data))
                .then(this.setState({ needIngredients: all }))
            })
    }

    //-------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------
    // ADD UP THE QUANTITY OF EACH INGREDIENT NEEDED (FOR ONE PERSON)
    // OUTPUT: SET STATE OF UNIQUEINGREDIENTS TO
    // [{ingredientId, ADDED quantity_per_person}, {}, {}]
    // -------------------------------------------------------------------------------
    
    addIngredientQuantity() {
        // console.log("RAN ADDINGREDIENTQUANTITYYYYYY")
        let all = [];
        let list = this.state.needIngredients;
        for(let recipeId of list) {
            // console.log('recipeId', recipeId)
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
    }

    //-------------------------------------------------------------------------------



    //-------------------------------------------------------------------------------
    // FETCH INGREDIENT PRICE FOR WALMART ONLY (storeId = 1)
    // OUTPUT: SET STATE OF PRICEINGREDIENTS
    // 
    // 
    //-------------------------------------------------------------------------------
    fetchIngredientPrice() {
        let all = [];
        let list = this.state.uniqueIngredients;
        for(let i in list) {
            const url = "/api/price/"+list[i].ingredientId; 
                fetch(url) 
                .then(res => res.json())
                .then(data => {
                    for(let i in data) {
                        if (data[i].store == 1) { 
                            all.push(data[i]);
                        }
                    }
                })
            .then(this.setState({ priceIngredients: all }))
        }
    }
    //-------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------
    // FETCH INGREDIENT PRICE FOR ALL STORES
    // OUTPUT: SET STATE OF PRICEINGREDIENTS
    //-------------------------------------------------------------------------------
    fetchIngredientPrice2() {
        let all = [];
        let list = this.state.uniqueIngredients;
        for(let i in list) {
            const url = "/api/price/"+list[i].ingredientId; 
                fetch(url) 
                .then(res => res.json())
                .then(data => all.push(data))
                .then(this.setState({ priceIngredients: all }))
        }
    }
    //-------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------
    // CALCULATE INGREDIENT PRICE & QUANTITY (FOR MULTIPLE PEOPLE)
    // 
    //-------------------------------------------------------------------------------
    addIngredientPrice() {
        // console.log("RAN ADD INGREDIENT PRICE")
        let all = [];
        let portions = this.state.numberOfPortions;
        let fromRecipes = this.state.uniqueIngredients;
        let fromStores = this.state.priceIngredients;

        //find how many units are needed per ingredient
        //find the price of each ingredient
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
                            console.log('Case for MORE but uneven amount', unitsNeeded);
                        } else {
                            unitsNeeded = Math.floor(c / b);
                            console.log('Case for MORE but even amount', unitsNeeded);
                        }
                    }
                    if (c <= b) {
                        unitsNeeded = 1;
                        console.log("Case for EQUAL or LESS", unitsNeeded);
                    }

                    // set the new data into newObj
                    newObj.id = ingredientId;
                    newObj.units = unitsNeeded;
                    newObj.totalPerIngredient = (unitsNeeded * unitIngredientPrice).toFixed(2);

                    // push to temp array
                    all.push(newObj);
            }
        }
        this.setState({ buyIngredients: all });
        }
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
        if (e.key === 'Enter') {
        let userInput = Number(e.target.value);
        this.setState({ numberOfPortions: userInput });
        }
    }

    //-------------------------------------------------------------------------------


    render(){
        console.log('Walmart.js @render state', this.state)
        return(
            <div>
                <h1>This is Walmart!</h1>
                <input onKeyDown={this.handleChange} placeholder="How many people?" />
            </div>
        );
    }
}

export default Loblaws;
