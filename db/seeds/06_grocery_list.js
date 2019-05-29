
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('grocery_list').insert([
        {id: 1, cookie_id: 22222},
        {id: 2, cookie_id: 22222},
        {id: 3, cookie_id: 22222},
        {id: 4, cookie_id: 22222},
        {id: 5, cookie_id: 22222},
        {id: 6, cookie_id: 22222}
      ]);
    });
};
