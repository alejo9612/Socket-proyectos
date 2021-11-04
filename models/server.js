//Servidor de express
const express = require('express');
//Servidor del socket.io
const http = require('http');
//Configuración socket server
const socketIO = require('socket.io');
//Manejo del path para la dirección de mi carpeta publica ya esta por defecto en express
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express(); //va a manejar mi conexión a expres
        this.port = process.env.PORT; //manejará mi puerto

        //Configuración de HTTP
        this.server = http.createServer(this.app); //crea mi server y lo maneja

        //Configuración del socket
        this.io = socketIO(this.server, {/* Configuraciones */ });

    }

    middlewares() {

        //Despligue del directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        //CORS
        this.app.use(cors());
    }
    
    configurarSockets(){
        //Hacemos la referencia de nuestro io a la clase de sockets
        new Sockets(this.io);
    }

    execute() {

        //Inicializar Middlewares
        this.middlewares();

        //Inicializar Sockets
        this.configurarSockets();

        //Inicializar el servidor
        this.server.listen(this.port, () => {
            console.log(`Server runing in port: ${this.port}`);
        });
    }
}

module.exports = Server;