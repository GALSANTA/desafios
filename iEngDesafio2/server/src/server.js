const process = require('process');
const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
if (process.argv.indexOf("--production") !== -1) server.use(require('cors')());
server.use(routes);

module.exports = function() {
    server.listen(process.env.PORT, () => {
        console.log(`O Server está rodando no http://localhost:${process.env.PORT}`)
    });
}()