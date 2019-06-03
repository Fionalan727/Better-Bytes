"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

//----------------------------------------------------------------------
// QUERY: FIND PRICE AT EACH STORE
// BASED ON SINGLE INGREDIENT ID
// 
// SELECT store.id, ingredients.id, store_ingredient.price, store_ingredient.quantity_per_item
// FROM store_ingredient
// JOIN store ON store.id = store_ingredient.store_id
// JOIN ingredients ON ingredients.id = store_ingredient.ingredients_id
// WHERE ingredients.id = 8;
//----------------------------------------------------------------------

  router.get("/:id", (req, res) => {
    // console.log(req);
    // res.send(200);
    // let ingredientID = 8;
    knex('store_ingredient')
    .join('store', 'store.id', 'store_ingredient.store_id')
    .join('ingredients', 'ingredients.id', 'store_ingredient.ingredients_id')
    .select('ingredients.id as ingredientId', 'store.id as store', 'store_ingredient.price', 'store_ingredient.quantity_per_item')
    .where('ingredients.id', req.params.id)
    .then(function (result) {
      // console.log('result', result);
      res.json(result);
    });
  });
//----------------------------------------------------------------------
  return router;
}