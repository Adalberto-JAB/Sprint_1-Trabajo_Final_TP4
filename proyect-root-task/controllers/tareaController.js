/*
3. Controlador (Controller)
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

