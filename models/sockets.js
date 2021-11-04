
class Sockets {

    constructor(io) { //llamamos por argumento nuestro io desde la configuración del server

        this.io = io;
        this.socketsEvents();
    }

    //Eventos de los sockets
    socketsEvents() {

        //Conexión de mi socket
        this.io.on('connection', (socket) => { //la palabra reservada socket se entiende como el CLIENTE

            //Está es la manera de emitir un mensaje a los clientes conectados
            // socket.emit('mensaje-bienvenida', {
            //     msg: 'Bienvenido al server',
            //     Fecha: new Date()
            // });//first argm. var-principal, second = msg

            socket.on('mensaje-to-server', (data) => {
                console.log(data);

                this.io.emit('mensaje-from-cliente', data);
            });

        });
    }

}

module.exports = Sockets;