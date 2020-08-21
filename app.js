const express = require('express');
/**
 * "path" es una libreria de rutas de carpetas.
 */
const path = require('path');

const app = new express();

/**
 * "use" es oara usar midleware(procesos intermedios), yo pido una ruta y express me la devuelve. 
 * "__dirname" es una varible global de node que indica la carpeta o el directorio donde node se esta procesando.
 * "static" es una funcion de express que permite cargar elementos fijos como assets 
 */
app.use(express.static(path.join(__dirname, 'public'))); 

/**
 * Ejemplo de GET
 * 
 * @param {e.Request} request - El objeto de petición.
 * @param {e.Response} response - El objeto de respuesta.
 */
app.get('/', (request, response) => {
    response.send('¡Bienvenido al palacio de Mazuzoe Mamiko Nishiki!');
});

/**
 * Ejemplo para cargar un archivo de HTML con el método GET.
 * 
 * @param {e.Request} request - El objeto de petición.
 * @param {e.Response} response - El objeto de respuesta.
 */
app.get('/odashi', (request, response) => {
    response.sendFile(path.join(__dirname + '/public/index.html'))
})

app.route('/vader')
    /**
     * Ejemplo de agrupamiento de ruta con /vader con el método GET
     * 
     * @param {e.Request} request - El objeto de petición.
     * @param {e.Response} response - El objeto de respuesta.
     */
    .get((request, response) => {
        response.send('Accediendo a Vader desde el método GET.')
    })
    /**
     * Ejemplo de agrupamiento de ruta con /vader con el método POST
     * 
     * @param {e.Request} request - El objeto de petición.
     * @param {e.Response} response - El objeto de respuesta.
     */
    .post((request, response) => {
        response.send('Accediendo a Vader por el método POST')
    });


app.listen(3000, () => {
    console.log('Gatito nacido')
})