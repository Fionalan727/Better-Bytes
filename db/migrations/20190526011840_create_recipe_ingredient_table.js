
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('recipe_ingredient', function(table){
            table.increments();
            table.integer('recipe_id').references('id').inTable('recipe').unsigned().onDelete('cascade');
            table.integer('ingredients_id').references('id').inTable('ingredients').unsigned().onDelete('cascade');
            table.decimal('quantity_per_person');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe_ingredient')
    ])
};

