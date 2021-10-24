const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect("seucluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); // fazer o backend entender json
app.use(routes);


// GET, POST, PUT, DELETE

// Params

    //Query params: request.query (filtros, ordenação, paginação)
    //Route params: request.params (Iidentificar um recurso na alteração ou remoção) 
    //Body: request.body (Dados para criação ou alteração de um registro)



server.listen(3333);