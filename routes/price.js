"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

//----------------------------------------------------------------------
// QUERY: FIND PRICE AT EACH STORE
// BASED ON SINGLE INGREDIENT ID
// 
// SELECT store.name, ingredients.name, store_ingredient.price
// FROM store_ingredient
// JOIN store ON store.id = store_ingredient.store_id
// JOIN ingredients ON ingredients.id = store_ingredient.ingredients_id
// WHERE ingredients.id = 8;
//----------------------------------------------------------------------

  router.get("/", (req, res) => {
    // console.log(req);
    // res.send(200);
    let ingredientID = 8;
    knex('store_ingredient')
    .join('store', 'store.id', 'store_ingredient.store_id')
    .join('ingredients', 'ingredients.id', 'store_ingredient.ingredients_id')
    .select('ingredients.name as ingredient', 'store.name as store', 'store_ingredient.price')
    .where('ingredients.id', ingredientID)
    .then(function (result) {
      // console.log('result', result);
      res.json(result);
    });
//----------------------------------------------------------------------
  });

  return router;
}