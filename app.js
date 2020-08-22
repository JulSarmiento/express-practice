const Express = require('express');
const path = require('path'); // "path" es una libreria de rutas de carpetas.

const app = new Express();

/**
 * Ejemplo de ruta raíz con el método GET.
 * 
 * @param {e.Request} request - El objeto de petición.
 * @param {e.Response} response - El objeto de respuesta.
 */
app.get('/', (request, response) => {
    response.send('¡Bienvenido al palacio de Mazuzoe Mamiko Nishiki!');
});

/**
 * Esta función permite cargar los archivos estáticos.
 * 
 * "use" es para usar middleware(procesos intermedios), yo pido una ruta y express me la devuelve. 
 * "__dirname" es una varible global de node que indica la carpeta o el directorio donde node se esta procesando o ejecutando.
 * "static" es una funcion de express que permite cargar elementos fijos como assets.
 */
app.use(Express.static(path.join(__dirname, 'public')));

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

/**
 * "listen" inicializa el servidor de express en el puerto que se le indique.
 *  Seguido de un callback que se ejecutará cuando se inicie.
*/    
app.listen(3000, () => {
    console.log('Gatito nacido')
})