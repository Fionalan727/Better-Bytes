
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ingredients', function(table){
            table.increments();
            
            table.string('name');
            table.float('price');
            table.integer('unit');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ingredients')
    ])
};
