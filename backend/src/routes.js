const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create); //poste pois quero crear uma sessão

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; 

//----Anotações Primeiras Explicações---------------------------------------------------------------
/**
 * Rota/ Recurso
 * 
*/

/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Paramêtros nomeados enviados na rota após o simbolo de ? (filtros, paginação)
  * Route Params: Paramêtros utilizados para identificar recursos (um unico recurso)
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  * 
  */

  /**Banco de Dados
   * 
   * SQL: MySQL, SQLite, PostgreSQL ,Oracle, Microdoft SQL Server //Garante melhor a qualidade dos dados
   * NoSQL: MongoDB, CouchDB, etc 
   */

  /**
   * SQLite
   * 
   * Driver: Select * from users // Para alteração de banco SQL precisará de ajustes
   * 
   * Query Builder: table ('users').select('*').where() //permite que possa 
   * alterar para qualquer banco SQL sem alteração no codigo //KNEX
   * 
   */

 /*  //rota\recurso que se deseja associar
  routes.post('/users', (request,response) =>{ 

    //request - Guarda todos os dados que vem através da nossa requisição
    //response - Responsavel por retornar uma resposta para o usuário


    //Query Params --------------------------------------------------------------------------
    
    //const params= request.query; //para acessar todos os parametros que vem através do query 
    //Exemplo: http://localhost:3333/users?name-Gabriela (nomeado)

    //Route Params--------------------------------------------------------------------------
    //const params = request.params; //para acessar o usuário especifico ('/users/:id') 
    //Exemplo :http://localhost:3333/users/1

    //Request Body:--------------------------------------------------------------------------
    const body = request.body; //para acessar o usuário especifico ('/users/:id') 
    //Exemplo :http://localhost:3333/users/1

    console.log(body); //apresentar resultado no terminal


    //return response.send('Hello World'); Retornando texto
    //return response.json ({
        //evento: 'Semana OmniStack 11.0',
       //aluno: 'Gabriela Leme '
    //})
});//criar a rota principal

module.exports = routes; //exportar rota para que o index possa visualizar*/
