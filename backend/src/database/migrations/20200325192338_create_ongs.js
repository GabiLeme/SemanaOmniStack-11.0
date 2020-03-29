
//up é o que a migration vai executar como criação/ alteração ...
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name');
    table.string('email');
    table.string('whatsapp');
    table.string('city');
    table.string('uf',2);
  });
};

//down é o que a migration irá fazer se algo der errado
exports.down = function(knex) {

    return knex.schema.dropTable('ongs');

};
