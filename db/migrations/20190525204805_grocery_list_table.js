
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('grocery_list', function(table){
            table.increments();
            table.float('price');
            table.integer('cookie_id');
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('grocery_list')
  ])
};
