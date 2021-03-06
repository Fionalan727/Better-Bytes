
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('store_ingredient', function(table){
            table.increments();
            table.integer('store_id').references('id').inTable('store').unsigned().onDelete('cascade');
            table.integer('ingredients_id').references('id').inTable('ingredients').unsigned().onDelete('cascade');
            table.decimal('price');
            table.integer('quantity_per_item');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('store_ingredient')
    ])
};
