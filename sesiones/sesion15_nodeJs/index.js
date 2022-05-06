/*este código fue copiado de la sesion del profesor */

const express = require('express'); /* pediremos el módulo express */
const app = express(); /*crearemos la aplicación */

app.use(express.static(__dirname + '/public/')); /* la usamos con el directorio public(donde ofreceremos la aplicación al cliente)*/

app.listen('3000', function() { /*definimos el puerto de escucha */
    console.log('Servidor web escuchando en el puerto 3000');
  });

console.log('Servidor iniciado');