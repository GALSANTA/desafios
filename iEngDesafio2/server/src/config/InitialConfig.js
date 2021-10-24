const process = require('process');


function hasParam(param) {
    return process.argv.indexOf(param) !== -1;
}

function initalConfigs() {

    if (hasParam("--production")) {
        console.log('\x1b[32m%s\x1b[0m', "MODO DE PRODUÇÃO");
        require('dotenv').config({
            path: ".env"
        });  
    } else if (hasParam("--development")) {
        console.log('\x1b[34m%s\x1b[0m', "MODO DE DESENVOLVIMENTO");
        require('dotenv').config({
            path: ".dev.env"
        });
    } else if (hasParam("--test")) {
        console.log('\x1b[33m%s\x1b[0m', "MODO DE TESTE");
        require('dotenv').config({
            path: ".test.env"
        });
    } else {
        throw new Error("MODO DE INICIALIZAÇÃO INVÁLIDO").stack;
    }
}

module.exports =  initalConfigs();