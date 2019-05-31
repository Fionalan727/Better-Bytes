"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

//----------------------------------------------------------------------
// QUERY: FIND COOKING STEPS 
// BASED ON SINGLE RECIPE ID
// 
// SELECT recipe_steps.step, recipe_steps.title, recipe_steps.image, recipe_steps.description
// FROM recipe_steps
// JOIN recipe ON recipe.id = recipe_steps.recipe_id
// WHERE recipe.id = 10;
//----------------------------------------------------------------------

  router.get("/", (req, res) => {
    // console.log(req);
    // res.send(200);
    let recipeID = 10;
    knex('recipe_steps')
    .join('recipe', 'recipe.id', 'recipe_steps.recipe_id')
    .select('recipe_steps.step', 'recipe_steps.title', 'recipe_steps.image', 'recipe_steps.description')
    .where('recipe.id', recipeID)
    .then(function (result) {
      res.json(result);
    });
  });

//----------------------------------------------------------------------
  return router;
}

// knex
//       .select("*")
//       .from('recipe_steps')
//       .where('recipe_step.recipe_id ', req.params.id)
//       .then((results) => {
//         res.json(results);
//         })
//   });