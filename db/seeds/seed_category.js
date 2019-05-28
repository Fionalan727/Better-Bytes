
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'most popular'},
        {id: 2, name: 'vegetarian'},
        {id: 3, name: 'dairy free'},
        {id: 4, name: 'budget friendly'},
        {id: 5, name: 'easy prep'}
      ]);
    });
};
