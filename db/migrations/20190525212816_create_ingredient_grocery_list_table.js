
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ingredient_grocery_list', function(table){
            table.increments();
            table.integer('grocery_list_id').references('grocery_list.id').onDelete('cascade');
            table.integer('ingredients_id').references('ingredients.id').onDelete('cascade');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ingredient_grocery_list')
    ])
};
