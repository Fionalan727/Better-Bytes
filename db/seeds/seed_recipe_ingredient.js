
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipe_ingredient').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipe_ingredient').insert([
          {id: 1, recipe_id: 1, ingredient_id: 18, quantity_per_person: 150},
          {id: 2, recipe_id: 1, ingredient_id: 19, quantity_per_person: 1},
          {id: 3, recipe_id: 1, ingredient_id: 20, quantity_per_person: 0.5},
          {id: 4, recipe_id: 1, ingredient_id: 8, quantity_per_person: 70},
          {id: 5, recipe_id: 1, ingredient_id: 2, quantity_per_person: 0.5},
          {id: 6, recipe_id: 1, ingredient_id: 21, quantity_per_person: 39},
          {id: 7, recipe_id: 10, ingredient_id: 22, quantity_per_person: 150},
          {id: 8, recipe_id: 10, ingredient_id: 2, quantity_per_person: 0.5},
          {id: 9, recipe_id: 10, ingredient_id: 4, quantity_per_person: 0.5},
          {id: 10, recipe_id: 10, ingredient_id: 8, quantity_per_person: 70},
          {id: 11, recipe_id: 10, ingredient_id: 23, quantity_per_person: 0.5},
        ]);
      });
  };
  