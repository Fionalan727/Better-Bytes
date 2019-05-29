
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ingredient_grocery_list', function(table){
            table.increments();
            table.integer('grocery_list_id').references('id').inTable('grocery_list').unsigned().onDelete('cascade');
            table.integer('ingredients_id').references('id').inTable('ingredients').unsigned().onDelete('cascade');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ingredient_grocery_list')
    ])
};
