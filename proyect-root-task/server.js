/*
6. Levantando el servidor: server.js
  El archivo del servidor en una aplicación Node.js es el 
  núcleo que maneja las peticiones HTTP, enruta las solicitudes 
  a los controladores correctos y coordina el flujo de la 
  aplicación. En nuestro caso, estamos utilizando Express.js, 
  un marco minimalista para manejar rutas, solicitudes y 
  respuestas de manera eficiente.

  Este archivo es fundamental porque:
    1. Inicializa el servidor: Se encarga de poner en marcha el 
      servidor y comenzar a escuchar las peticiones en un puerto 
      específico.

    2. Define las rutas: Determina qué acción realizar según la 
      solicitud del cliente (por ejemplo, qué controlador debe 
      manejar una solicitud GET o POST).

    3. Controla la respuesta al cliente: En función de las acciones 
      ejecutadas, envía una respuesta al cliente (por ejemplo, 
      devolviendo una lista de tareas en formato JSON).

Justificación
  El archivo del servidor es crucial en el patrón MVC 
  (Modelo-Vista-Controlador) porque actúa como el punto de entrada 
  principal para las solicitudes entrantes. Desde aquí, las 
  solicitudes se enrutan a los controladores que manejan la lógica 
  de negocio a través de los servicios y repositorios. Este diseño 
  mantiene el servidor como una parte independiente que no se 
  preocupa por la lógica de negocio o los detalles de almacenamiento, 
  permitiendo que el servidor sea ligero y fácil de mantener.

Código del Archivo del Servidor ( server. mj s )
*/


// Importamos el framework Express
import express from 'express'; 
// Importamos los controladores
import { 
  listarTareasController, 
  listarTareasCompletadasController,
  crearTareaController, 
  completarTareaController,
  eliminarTareaController 
} from './controllers/tareaController.js';

const app = express(); // Inicializamos una aplicación de Express
const PORT = 3000; // Definimos el puerto en el que escuchará el servidor

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json());

// Rutas
// Ruta para obtener todas las tareas
app. get ('/tareas', listarTareasController);

// Ruta para obtener las tareas completadas
app.get('/tareas/completadas', listarTareasCompletadasController);

// Ruta para crear una nueva tarea
app.post('/tareas', crearTareaController);

// Ruta para marcar una tarea como completada
app. put ('/tareas/:id/completar', completarTareaController) ;

// Ruta para eliminar una tarea
app.delete('/tareas/:id', eliminarTareaController);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



/*
Explicación del Código del Servidor

  1. Importación de Módulos:
    o express: El framework Express se utiliza para crear y gestionar 
      el servidor. Express permite manejar las rutas y solicitudes 
      HTTP de manera muy eficiente.
    o Controladores: Importamos los controladores desde el archivo 
      'tareacontroller.js'. Estos controladores son responsables de 
      manejar la lógica de cada tipo de solicitud (GET, POST, PUT, 
      DELETE) en función de la ruta.

  2. Inicialización del Servidor:
    o app = exp ress () : Creamos una instancia de la aplicación 
      Express. Esto es el punto de entrada para todas las 
      solicitudes HTTP.
    o PORT = 3000 : Definimos el puerto en el que nuestro servidor 
      escuchará las solicitudes. En este caso, el puerto es 3000.

  3. Middleware express.json( ):
    o Función: Este middleware de Express permite que la aplicación 
      pueda recibir y procesar el cuerpo de las solicitudes en 
      formato JSON. Es crucial para manejar datos de tipo POST o PUT, 
      donde el cliente envía un cuerpo de datos en JSON (por ejemplo, 
      los datos de una tarea nueva).

  4. Definición de las Rutas:
    o app.get('/tareas', listarTareasController): Define la ruta 
      para obtener todas las tareas utilizando el método GET. Cuando 
      se accede a /tareas, Express invoca el listarTareasController.
    o app.get('/tareas/completadas', listarTareasCompletadasController): 
      Similar a la ruta anterior, pero solo devuelve las tareas que 
      han sido completadas.
    o app.post('/tareas', crearTareaController) : Define la ruta 
      para crear una nueva tarea utilizando el método POST. El 
      controlador crearTareaController es invocado para manejar la
      lógica de creación.
    o app.put('/tareas/:id/completar', completarTareaController): 
      Define la ruta para marcar una tarea como completada, utilizando 
      el método PUT. El parámetro :id en la URL se utiliza para 
      identificar qué tarea debe completarse.
    o app.delete('/tareas/:id', eliminarTareaController): Define la 
      ruta para eliminar una tarea específica usando el método DELETE. 
      El id se pasa como parámetro para identificar la tarea a eliminar.

  5. Iniciar el Servidor:
    o app.listen(PORT): Esta función inicia el servidor en el puerto 
      especificado. En este caso, el servidor escuchará en el puerto 3000.
    o Callback: El callback asociado imprime un mensaje en la consola, 
      indicando que el servidor está funcionando correctamente y listo 
      para aceptar solicitudes.

Justificación del Diseño
  1. Modularidad:
    o La lógica de negocio no se mezcla con la lógica de enrutamiento en 
      este archivo. En su lugar, los controladores se encargan de manejar 
      las solicitudes y realizar las operaciones correspondientes. Esto 
      sigue el principio de responsabilidad única, asegurando que cada 
      parte del sistema tiene su propia responsabilidad.
    o Este diseño también asegura que el servidor sea modular y escalable. 
      Si se necesitan agregar más rutas o modificar alguna existente, se 
      puede hacer sin tocar el resto de la aplicación.

  2. Facilidad de Mantenimiento:
    o El uso de controladores permite que el código sea más fácil de 
      mantener. Si se necesita cambiar la lógica de cómo se obtiene o 
      procesa una tarea, solo se modifica el controlador correspondiente, 
      sin necesidad de tocar el archivo del servidor.
    o El hecho de que cada ruta esté claramente definida también facilita 
      la mantenibilidad del código. Las solicitudes y respuestas están 
      bien estructuradas, y cada ruta tiene un controlador bien definido.

  3. Escalabilidad:
    o Dado que las rutas están bien organizadas y separadas de la lógica 
      de negocio, el sistema puede escalar fácilmente. Se pueden añadir 
      más rutas o modificar el comportamiento de las rutas existentes sin 
      afectar la arquitectura general del sistema.

En resumen, este archivo del servidor actúa como el punto de entrada a 
nuestra aplicación, gestionando las solicitudes y delegando la lógica 
de negocio a los controladores. Este diseño asegura que el sistema sea 
modular, fácil de mantener y escalable.
*/