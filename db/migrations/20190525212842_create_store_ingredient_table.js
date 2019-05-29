
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('store_ingredient', function(table){
            table.increments();
            table.integer('store_id').references('store.id').onDelete('cascade');
            table.integer('ingredients_id').references('ingredients.id').onDelete('cascade');
            table.decimal('price');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('store_ingredient')
    ])
};
