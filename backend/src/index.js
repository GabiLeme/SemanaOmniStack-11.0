const express= require('express'); //coloca as funcionalidades do express na variavel express
const cors = require('cors'); 
const routes = require('./routes'); //colocar ./ para entender que é um arquivo e não um pacote

const app = express(); // variavel que armazeana a aplicação //instancia aplicação

app.use(cors());
app.use(express.json()); //avisa ao express que será utilizado json nas requisições
app.use(routes);

app.listen(3333); //aplicação devera ouvir a porta 33333 (node) 3000(react)

