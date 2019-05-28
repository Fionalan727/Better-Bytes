
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'lemon', image: "/image/lemon.png", unit: '1'},
        {id: 2, name: 'onion', image: "/image/onion.png", unit: '1'},
        {id: 3, name: 'potatoes', image: "/image/potatoes.png", unit: '1'},
        {id: 4, name: 'broccoli', image: "/image/broccoli.png", unit: '1'},
        {id: 5, name: 'lettuce', image: "/image/lettuce.png", unit: '1'},
        {id: 6, name: 'celery', image: "/image/celery.png", unit: '1'},
        {id: 7, name: 'carrot', image: "/image/carrot.png", unit: '1'},
        {id: 8, name: 'cherry tomatoes', image: "/image/cherrytomatoes.png", unit: '1'},
        {id: 9, name: 'cucumber', image: "/image/cucumber.png", unit: '1'},
        {id: 10, name: 'cream cheese', image: "/image/creamcheese.png", unit: '1'},
        {id: 11, name: 'butter', image: "/image/butter.png", unit: '1'},
        {id: 12, name: 'bread', image: "/image/bread.png", unit: '1'},
        {id: 13, name: 'turkey', image: "/image/turkey.png", unit: '1'},
        {id: 14, name: 'bacon', image: "/image/bacon.png", unit: '1'},
        {id: 15, name: 'chicken thigh', image: "/image/chickenthigh.png", unit: '1'},
        {id: 16, name: 'eggs', image: "/image/eggs.png", unit: '1'},
        {id: 17, name: 'ham', image: "/image/ham.png", unit: '1'},
        {id: 18, name: 'pork chops', image: "/image/porkchops.png", unit: '1'},
        {id: 19, name: 'zucchini', image: "/image/zucchini.png", unit: '1'},
        {id: 20, name: 'chives', image: "/image/chives.png", unit: '1'},
        {id: 21, name: 'rice', image: "/image/rice.png", unit: '1'},
        {id: 22, name: 'sausage', image: "/image/sausage.png", unit: '1'},
        {id: 23, name: 'parsley', image: "/image/parsley.png", unit: '1'}
      ]);
    });
};
