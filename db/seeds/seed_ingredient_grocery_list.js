
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_grocery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_grocery_list').insert([
        {id: 1, grocery_list_id: 1, ingredients_id: 18},
        {id: 2, grocery_list_id: 1, ingredients_id: 19},
        {id: 3, grocery_list_id: 1, ingredients_id: 20},
        {id: 4, grocery_list_id: 1, ingredients_id: 8},
        {id: 5, grocery_list_id: 1, ingredients_id: 2},
        {id: 6, grocery_list_id: 1, ingredients_id: 21},
        {id: 7, grocery_list_id: 1, ingredients_id: 22},
        {id: 8, grocery_list_id: 1, ingredients_id: 4},
        {id: 9, grocery_list_id: 1, ingredients_id: 23}
      ]);
    });
};
