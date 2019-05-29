
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('recipe_steps', function(table){
            table.increments();
            table.integer('recipe_id').references('id').inTable('recipe').unsigned().onDelete('cascade');
            table.integer('step');
            table.string('image');
            table.string('title');
            table.string('description');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe_steps')
    ])
};

