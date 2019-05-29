
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'lemon', image: "/image/lemon.png", unit: 'piece'},
        {id: 2, name: 'onion', image: "/image/onion.png", unit: 'piece'},
        {id: 3, name: 'potatoes', image: "/image/potatoes.png", unit: 'piece'},
        {id: 4, name: 'broccoli', image: "/image/broccoli.png", unit: 'piece'},
        {id: 5, name: 'lettuce', image: "/image/lettuce.png", unit: 'piece'},
        {id: 6, name: 'celery', image: "/image/celery.png", unit: 'piece'},
        {id: 7, name: 'carrot', image: "/image/carrot.png", unit: 'piece'},
        {id: 8, name: 'cherry tomatoes', image: "/image/cherrytomatoes.png", unit: 'gram'},
        {id: 9, name: 'cucumber', image: "/image/cucumber.png", unit: 'piece'},
        {id: 10, name: 'cream cheese', image: "/image/creamcheese.png", unit: 'gram'},
        {id: 11, name: 'butter', image: "/image/butter.png", unit: 'gram'},
        {id: 12, name: 'bread', image: "/image/bread.png", unit: 'piece'},
        {id: 13, name: 'turkey', image: "/image/turkey.png", unit: 'gram'},
        {id: 14, name: 'bacon', image: "/image/bacon.png", unit: 'gram'},
        {id: 15, name: 'chicken thigh', image: "/image/chickenthigh.png", unit: 'gram'},
        {id: 16, name: 'eggs', image: "/image/eggs.png", unit: 'piece'},
        {id: 17, name: 'ham', image: "/image/ham.png", unit: 'gram'},
        {id: 18, name: 'pork chops', image: "/image/porkchops.png", unit: 'gram'},
        {id: 19, name: 'zucchini', image: "/image/zucchini.png", unit: 'piece'},
        {id: 20, name: 'chives', image: "/image/chives.png", unit: 'piece'},
        {id: 21, name: 'rice', image: "/image/rice.png", unit: 'gram'},
        {id: 22, name: 'sausage', image: "/image/sausage.png", unit: 'gram'},
        {id: 23, name: 'parsley', image: "/image/parsley.png", unit: 'piece'}
      ]);
    });
};
