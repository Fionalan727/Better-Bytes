"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

//----------------------------------------------------------------------
// QUERY: FIND QUANTITY OF ALL INGREDIENTS IN THE RECIPE
// BASED ON SINGLE RECIPE ID
// 
// SELECT ingredients.name, recipe_ingredient.quantity_per_person
// FROM recipe_ingredient
// JOIN recipe ON recipe.id = recipe_ingredient.recipe_id
// JOIN ingredients ON ingredients.id = recipe_ingredient.ingredients_id
// WHERE recipe.id = 10;
//----------------------------------------------------------------------

  router.get("/:id", (req, res) => {
    // console.log(req);
    // res.send(200);
    // let recipeID = 10;
    knex('recipe_ingredient')
    .join('recipe', 'recipe.id', 'recipe_ingredient.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredient.ingredients_id')
    .select('ingredients.id as ingredientId', 'recipe_ingredient.quantity_per_person')
    .where('recipe.id', req.params.id)
    .then(function (result) {
      res.json(result);
    });
  });

//----------------------------------------------------------------------
  return router;
}