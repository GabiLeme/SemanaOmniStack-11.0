
//up é o que a migration vai executar como criação/ alteração ...
exports.up = function(knex) {
    return knex.schema.createTable('incidents',function (table){
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      
      //armazena id da tabela on
      table.string('ong_id').notNullable();

      //cria relacionemento entre a tabela incidents e ongs
      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  //down é o que a migration irá fazer se algo der errado
  exports.down = function(knex) {
      return knex.schema.dropTable('incidents');
  };
  