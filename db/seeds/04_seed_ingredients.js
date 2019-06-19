
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'lemon', image: "/image/ingredients/lemon.png", unit: 'piece'},
        {id: 2, name: 'onion', image: "/image/ingredients/onion.png", unit: 'piece'},
        {id: 3, name: 'potatoes', image: "/image/ingredients/potatoes.png", unit: 'piece'},
        {id: 4, name: 'broccoli', image: "/image/ingredients/broccoli.png", unit: 'piece'},
        {id: 5, name: 'lettuce', image: "/image/ingredients/lettuce.png", unit: 'piece'},
        {id: 6, name: 'celery', image: "/image/ingredients/celery.png", unit: 'piece'},
        {id: 7, name: 'carrot', image: "/image/ingredients/carrot.png", unit: 'piece'},
        {id: 8, name: 'cherry tomatoes', image: "/image/ingredients/cherrytomatoes.png", unit: 'gram'},
        {id: 9, name: 'cucumber', image: "/image/ingredients/cucumber.png", unit: 'piece'},
        {id: 10, name: 'cream cheese', image: "/image/ingredients/creamcheese.png", unit: 'gram'},
        {id: 11, name: 'butter', image: "/image/ingredients/butter.png", unit: 'gram'},
        {id: 12, name: 'bread', image: "/image/ingredients/bread.png", unit: 'piece'},
        {id: 13, name: 'turkey', image: "/image/ingredients/turkey.png", unit: 'gram'},
        {id: 14, name: 'bacon', image: "/image/ingredients/bacon.png", unit: 'gram'},
        {id: 15, name: 'chicken thigh', image: "/image/ingredients/chickenthigh.png", unit: 'gram'},
        {id: 16, name: 'eggs', image: "/image/ingredients/eggs.png", unit: 'piece'},
        {id: 17, name: 'ham', image: "/image/ingredients/ham.png", unit: 'gram'},
        {id: 18, name: 'pork chops', image: "/image/ingredients/porkchops.png", unit: 'gram'},
        {id: 19, name: 'zucchini', image: "/image/ingredients/zucchini.png", unit: 'piece'},
        {id: 20, name: 'chives', image: "/image/ingredients/chives.png", unit: 'piece'},
        {id: 21, name: 'rice', image: "/image/ingredients/rice.png", unit: 'gram'},
        {id: 22, name: 'sausage', image: "/image/ingredients/sausage.png", unit: 'gram'},
        {id: 23, name: 'parsley', image: "/image/ingredients/parsley.png", unit: 'piece'}
      ]);
    });
};
