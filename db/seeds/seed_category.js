
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'vegetarian'},
        {id: 2, name: 'dairy free'},
        {id: 3, name: 'budget friendly'},
        {id: 4, name: 'easy prep meals'},
        {id: 5, name: 'few ingredients'}
      ]);
    });
};
