
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('recipe_ingredient', function(table){
            table.increments();
            table.integer('recipe_id').references('recipe.id').onDelete('cascade');
            table.integer('ingredients_id').references('ingredients.id').onDelete('cascade');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe_ingredient')
    ])
};

