"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select('*')
      .from("ingredients")
      .join('recipe_ingredient','recipe_ingredient.ingredient_id', 'ingredients.id')
      .where("recipe_ingredients.recipe_id", req.params.id)
      .then((results) => {
        res.json(results);
        })
  });
  return router;
}
// // select ingredients.* from ingredients 
// join recipe_ingredient on recipe_ingredient.ingredients_id = ingredients.id 
// where recipe_ingredient.recipe_id = 1;
