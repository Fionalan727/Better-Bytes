
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('recipe', function(table){
            table.increments();
            table.string('name');
            table.integer('cooking_duration');
            table.text('description');
            table.string('category_id');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe')
    ])
};
