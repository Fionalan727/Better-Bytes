
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('recipe', function(table){
            table.increments();
            table.string('name');
            table.string('image');
            table.string('category_id');
            table.integer('cooking_duration');
            table.text('description');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe')
    ])
};
