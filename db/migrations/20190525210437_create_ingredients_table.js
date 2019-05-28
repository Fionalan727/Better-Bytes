
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ingredients', function(table){
            table.increments();
            table.string('name');
            table.string('image');
            table.string('unit');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ingredients')
    ])
};
