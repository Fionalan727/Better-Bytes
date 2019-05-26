
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('store', function(table){
            table.increments();
            table.string('name');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('store')
    ])
};
