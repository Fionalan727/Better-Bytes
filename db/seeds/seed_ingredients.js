
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'sugar', price: '1.97', unit: '1'},
        {id: 2, name: 'onion', price: '1.32', unit: '1'},
        {id: 3, name: 'potatoes', price: '0.77', unit: '1'},
        {id: 4, name: 'broccoli', price: '1.49', unit: '1'},
        {id: 5, name: 'lettuce', price: '1.97', unit: '1'},
        {id: 6, name: 'cellery', price: '4.97', unit: '1'},
        {id: 7, name: 'carrot', price: '2.47', unit: '1'},
        {id: 8, name: 'tomato', price: '0.35', unit: '1'},
        {id: 9, name: 'cucumber', price: '1.97', unit: '1'},
        {id: 10, name: 'cream cheese', price: '2.97', unit: '1'},
        {id: 11, name: 'butter', price: '4.27', unit: '1'},
        {id: 12, name: 'cream', price: '3.17', unit: '1'},
        {id: 13, name: 'bread', price: '2.47', unit: '1'},
        {id: 14, name: 'turkey', price: '11.00', unit: '1'},
        {id: 15, name: 'bacon', price: '5.97', unit: '1'},
        {id: 16, name: 'chicken thigh', price: '5.46', unit: '1'},
        {id: 17, name: 'eggs', price: '3.20', unit: '1'},
        {id: 18, name: 'ham', price: '10.00', unit: '1'}
      ]);
    });
};
