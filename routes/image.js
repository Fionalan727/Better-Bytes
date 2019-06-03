"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

//----------------------------------------------------------------------
// QUERY: FIND NAME AND IMAGE OF AN INGREDIENT
// BASED ON SINGLE INGREDIENT ID
// 
// SELECT ingredients.name, ingredients.image
// FROM ingredients
// WHERE ingredients.id = 1;
//----------------------------------------------------------------------

  router.get("/:id", (req, res) => {
    // console.log(req);
    // res.send(200);
    // let ingredientID = 1;
    knex('ingredients')
    .select('ingredients.name as name', 'ingredients.image')
    .where('ingredients.id', req.params.id)
    .then(function (result) {
      res.json(result);
    });
  });

//----------------------------------------------------------------------
  return router;
}