
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('store_grocery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('store_grocery_list').insert([
        {id: 1, store_id: 1, grocery_list_id: 1},
        {id: 2, store_id: 2, grocery_list_id: 1},
        {id: 3, store_id: 3, grocery_list_id: 1}
      ]);
    });
};
