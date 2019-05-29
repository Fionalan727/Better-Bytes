
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_grocery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_grocery_list').insert([
        {id: 1, grocery_list_id: 1, ingredients_id: 22},
        {id: 2, grocery_list_id: 1, ingredients_id: 2},
        {id: 3, grocery_list_id: 1, ingredients_id: 23},
        {id: 4, grocery_list_id: 1, ingredients_id: 8},
        {id: 5, grocery_list_id: 2, ingredients_id: 22},
        {id: 6, grocery_list_id: 2, ingredients_id: 2},
        {id: 7, grocery_list_id: 2, ingredients_id: 23},
        {id: 8, grocery_list_id: 2, ingredients_id: 8},
        {id: 9, grocery_list_id: 3, ingredients_id: 22},
        {id: 10, grocery_list_id: 3, ingredients_id: 2},
        {id: 11, grocery_list_id: 3, ingredients_id: 23},
        {id: 12, grocery_list_id: 3, ingredients_id: 8},
        {id: 13, grocery_list_id: 4, ingredients_id: 18},
        {id: 14, grocery_list_id: 4, ingredients_id: 2},
        {id: 15, grocery_list_id: 4, ingredients_id: 8},
        {id: 16, grocery_list_id: 4, ingredients_id: 19},
        {id: 17, grocery_list_id: 5, ingredients_id: 18},
        {id: 18, grocery_list_id: 5, ingredients_id: 2},
        {id: 19, grocery_list_id: 5, ingredients_id: 8},
        {id: 20, grocery_list_id: 5, ingredients_id: 19},
        {id: 21, grocery_list_id: 6, ingredients_id: 18},
        {id: 22, grocery_list_id: 6, ingredients_id: 2},
        {id: 23, grocery_list_id: 6, ingredients_id: 8},
        {id: 24, grocery_list_id: 6, ingredients_id: 19}
      ]);
    });
};
