
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('store_grocery_list', function(table){
            table.increments();
            table.integer('grocery_list_id').references('id').inTable('grocery_list').unsigned().onDelete('cascade');
            table.integer('store_id').references('id').inTable('store').unsigned().onDelete('cascade');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('store_grocery_list')
    ])
};
