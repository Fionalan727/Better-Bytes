
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('recipe_steps', function(table){
            table.increments();
            table.integer('recipe_id').references('recipe.id').onDelete('cascade');
            table.integer('step');
            table.string('image');
            table.string('description');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe_steps')
    ])
};

