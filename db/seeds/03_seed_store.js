exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('store').del()
    .then(function () {
      // Inserts seed entries
      return knex('store').insert([
        {id: 1, name: 'Walmart'},
        {id: 2, name: 'Loblaws'},
        {id: 3, name: 'Metro'}
      ]);
    });
};