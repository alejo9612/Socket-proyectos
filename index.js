const Server = require("./models/server");//exportamos nuestra clase
require('dotenv').config();//Manejo de variables de entorno
const server = new Server();//creamos los nuevos datos de mi server

server.execute();//llamamos le metodo que necesitamos


