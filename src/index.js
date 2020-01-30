const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
//const MongoClient = require('mongodb').MongoClient;

const app = express();
//mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-t1d8c.mongodb.net/bancoTeste?retryWrites=true&w=majority');
// , {
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// }


//var uri = "mongodb://omnistack:senhasenha@cluster0-shard-00-00-t1d8c.mongodb.net:27017,cluster0-shard-00-01-t1d8c.mongodb.net:27017,cluster0-shard-00-02-t1d8c.mongodb.net:27017/admin?ssl=false&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
var uri = "mongodb://localhost:27017/admin";
mongoose.connect(uri,  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (asd) => {
    console.log(asd + ' logado');
}).catch(err => console.log(err));

app.use(express.json());
app.use(routes);

app.listen(3333);