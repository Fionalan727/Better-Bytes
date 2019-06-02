
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('grocery_list').insert([
        {id: 1, cookie_id: 11111},
      ]);
    });
};
