/*
3. Controlador (Controller)
  
El Controlador es el intermediario entre el modelo, la vista y las 
solicitudes del usuario. Su función es recibir las solicitudes HTTP, 
interactuar con la capa de servicio para procesar los datos, y enviar 
la respuesta utilizando la vista. La lógica de negocio no debe estar 
en el controlador, sino en la capa de servicio.

Ejemplo Teórico
*/

import { 
  listarTareas, 
  listarTareasCompletadas, 
  crearTarea, 
  completarTarea,
  eliminarTarea
} from '../services/tareaService.js';

import { 
  renderizarListaTareas, 
  renderizarMensaje
} from '../views/tareaVista.js';


// Controlador para listar todas las tareas
export function listarTareasController( req, res ) {
  const tareas = listarTareas();
  res.send(renderizarlistaTareas(tareas));
};

// Controlador para listar solo las tareas completadas
export function listarTareasCompletadasController( req, res ) {
  const tareasCompletadas = listarTareasCompletadas();
  res.send(renderizarlistaTareas(tareasCompletadas));
};

// Controlador para crear una nueva tarea
export function crearTareaController( req, res ) {
  const { id, titulo, descripcion, completado } = req.body;
  crearTarea( id, titulo, descripcion, completado );
  res.send(renderizarMensaje('Tarea creada con éxito'));
};

// Controlador para marcar una tarea como completada
export function completarTareaController( req, res ) {
  const { id } = req.params;
  completarTarea( parseInt( id ) );
  res.send( renderizarMensaje( 'Tarea marcada como completada' ) );
};

// Controlador para eliminar una tarea
export function eliminarTareaController( req, res ) {
  const { id } = req.params;
  eliminarTarea( parseInt( id ) );
  res.send( renderizarMensaje( 'Tarea eliminada con éxito' ) );
};



/*
Explicación teórica de las funciones en "tareaController.js"

1. listarTareasController(req, res)

  Función: Controlador para listar todas las tareas.

  Explicación teórica:
    En este caso, la función actúa como un controlador que maneja 
    la solicitud HTTP GET para recuperar todas las tareas. El 
    controlador se encarga de recibir la solicitud, llamar al 
    servicio que obtiene las tareas desde la capa de persistencia, 
    y luego formatear la respuesta en JSON utilizando la vista.

  Flujo:
    • Solicitud GET enviada a /tareas.
    • El controlador llama al servicio para obtener la lista de tareas.
    • La respuesta se envía en formato JSON.


2. listarTareasCompletadasController(req, res)
  
  Función: Controlador para listar solo las tareas completadas.

  Explicación teórica:
    Este controlador se encarga de gestionar la solicitud HTTP GET 
    para listar únicamente las tareas que están marcadas como 
    completadas. El controlador delega la tarea de filtrar las 
    tareas al servicio, que obtiene los datos de la capa de 
    persistencia, y luego la vista formatea esos datos para 
    enviarlos como respuesta.

  Flujo:
    • Solicitud GET enviada a /tareas/completadas.
    • El controlador solicita al servicio que filtre las tareas 
      completadas.
    • La respuesta se envía en formato JSON.


3. crearTareaController(req, res)

  Función: Controlador para crear una nueva tarea.

  Explicación teórica:
    Esta función recibe una solicitud POST con los datos de una 
    nueva tarea en el cuerpo de la solicitud (req.body). El 
    controlador pasa esos datos a la capa de servicio, donde se 
    valida y persiste la nueva tarea. Posteriormente, la vista 
    envía un mensaje de confirmación al cliente.

  Flujo:
    • Solicitud POST enviada a /ta reas con los datos de la tarea.
    • El controlador pasa los datos al servicio, que valida y 
      almacena la tarea.
    • La vista envía un mensaje de éxito en formato JSON.

    
4. completarTareaController(req, res)
  
  Función: Controlador para marcar una tarea como completada.

  Explicación teórica:
    Este controlador maneja la solicitud PUT para actualizar 
    una tarea específica y marcarla como completada. Utiliza 
    el parámetro 'id' de la URL para identificar la tarea que 
    debe actualizarse. El servicio se encarga de realizar la 
    actualización, y luego la vista envía un mensaje de 
    confirmación.

  Flujo:
    • Solicitud PUT enviada a /tareas/: id/completar {por ejemplo, 
      /tareas/1 /completar).
    • El controlador pasa el i d de la tarea al servicio, que la 
      marca como completada.
    • La vista envía un mensaje de éxito.


5. eliminarTareaController(req, res)

  Función: Controlador para eliminar una tarea.

  Explicación teórica:
    Esta función controla la solicitud DELETE para eliminar una 
    tarea específica, utilizando el parámetro 'id' de la URL. El 
    controlador delega la lógica de eliminación a la capa de 
    servicio, que luego interactúa con la capa de persistencia 
    para eliminar la tarea. Finalmente, la vista envía una 
    confirmación al cliente.

  Flujo:
    • Solicitud DELETE enviada a /tareas/:id (por ejemplo, 
      '/tareas/1').
    • El controlador pasa el i d de la tarea al servicio, 
      que la elimina.
    • La vista envía un mensaje de éxito confirmando la 
      eliminación.

  Resumen general de las funciones:
    Cada una de estas funciones sigue el patrón MVC, donde el 
    controlador actúa como intermediario entre las solicitudes 
    del cliente (por ejemplo, a través de Postman) y las 
    respuestas generadas por la aplicación. 

  El controlador:
    • Recibe la solicitud desde el cliente.
    • Llama a la capa de servicio, que maneja la lógica de negocio.
    • Envía la respuesta formateada, ya sea una lista de tareas o 
      un mensaje de éxito, utilizando la capa de vista.
*/
