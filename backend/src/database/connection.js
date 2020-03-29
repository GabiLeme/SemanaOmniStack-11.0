const knex = require('knex');
const configuration = require('../../knexfile') //../é para voltar pasta

const connection = knex(configuration.development); 

module.exports = connection;