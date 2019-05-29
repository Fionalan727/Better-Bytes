
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('store_ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('store_ingredient').insert([
        {id: 1, store_id: 1, ingredient_id: 22, price: 4.97},
        {id: 2, store_id: 2, ingredient_id: 22, price: 5.99},
        {id: 3, store_id: 3, ingredient_id: 22, price: 6.49},
        {id: 4, store_id: 1, ingredient_id: 2, price: 1.32},
        {id: 5, store_id: 2, ingredient_id: 2, price: 1.23},
        {id: 6, store_id: 3, ingredient_id: 2, price: 1.10},
        {id: 7, store_id: 1, ingredient_id: 23, price: 1.97},
        {id: 8, store_id: 2, ingredient_id: 23, price: 2.49},
        {id: 9, store_id: 3, ingredient_id: 23, price: 2.49},
        {id: 10, store_id: 1, ingredient_id: 8, price: 3.97},
        {id: 11, store_id: 2, ingredient_id: 8, price: 5.99},
        {id: 12, store_id: 3, ingredient_id: 8, price: 3.99},
        {id: 13, store_id: 1, ingredient_id: 18, price: 10.00},
        {id: 14, store_id: 2, ingredient_id: 18, price: 7.40},
        {id: 15, store_id: 3, ingredient_id: 18, price: 10.66},
        {id: 16, store_id: 1, ingredient_id: 19, price: 0.92},
        {id: 17, store_id: 2, ingredient_id: 19, price: 1.54},
        {id: 18, store_id: 3, ingredient_id: 19, price: 1.35}
      ]);
    });
};
