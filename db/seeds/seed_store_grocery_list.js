
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('store_grocery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('store_grocery_list').insert([
        {id: 1, store_id: 1, grocery_list_id: 1},
        {id: 2, store_id: 2, grocery_list_id: 1},
        {id: 3, store_id: 3, grocery_list_id: 1},
        {id: 4, store_id: 1, grocery_list_id: 2},
        {id: 5, store_id: 2, grocery_list_id: 2},
        {id: 6, store_id: 3, grocery_list_id: 2},
        {id: 7, store_id: 1, grocery_list_id: 3},
        {id: 8, store_id: 2, grocery_list_id: 3},
        {id: 9, store_id: 3, grocery_list_id: 3},
        {id: 10, store_id: 1, grocery_list_id: 4},
        {id: 11, store_id: 2, grocery_list_id: 4},
        {id: 12, store_id: 3, grocery_list_id: 4},
        {id: 13, store_id: 1, grocery_list_id: 5},
        {id: 14, store_id: 2, grocery_list_id: 5},
        {id: 15, store_id: 3, grocery_list_id: 5},
        {id: 16, store_id: 1, grocery_list_id: 6},
        {id: 17, store_id: 2, grocery_list_id: 6},
        {id: 18, store_id: 3, grocery_list_id: 6}
      ]);
    });
};
