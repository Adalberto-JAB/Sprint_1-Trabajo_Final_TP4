/*
4. Capa de Servicio (Service)
  La Capa de Servicio se encarga de contener la lógica 
  de negocio. Es el intermediario entre el controlador y 
  la capa de persistencia. La capa de servicio interactúa 
  con el modelo y la persistencia para filtrar, validar o 
  manipular los datos antes de que se los pase al 
  controlador.

Ejemplo Teórico

Archivo: tareaService.mjs
*/

// Importa la capa de persistencia (repositorio)
import TareaRepository from '../repository/tareaRepository.js';
import Tarea from '../models/tarea.js'; // Importa el modelo de Tarea

// Instancia el repositorio para manejar las tareas
const tareaRepo = new TareaRepository();

// Servicio para obtener todas las tareas
export function listarTareas() {
  // Obtiene todas las tareas desde la capa de persistencia
  return tareaRepo.obtenerTodas();
};

// Servicio para obtener solo las tareas completadas
export function listarTareasCompletadas() {
  // Obtiene todas las tareas desde la capa de persistencia
  const tareas = tareaRepo.obtenerTodas();

  // Filtra las tareas completadas
  return tareas.filter( tarea => tarea.completado );
};

// Servicio para crear una nueva tarea
export function crearTarea( id, titulo, descripcion, completado= false ) {
  // Obtiene todas las tareas
  const tareas= tareaRepo.obtenerTodas();

  // Crea una nueva instancia del modelo Tarea
  const nuevaTarea = new Tarea( id, titulo, descripcion, completado );

  // Valida que la tarea tenga un título válido
  nuevaTarea.validar();

  // Añade la nueva tarea a la lista de tareas
  tareas.push(nuevaTarea);

  // Guarda la lista actualizada de tareas en el archivo
  tareaRepo.guardar(tareas);
};

// Servicio para marcar una tarea como completada
export function completarTarea( id ) {
  // Obtiene todas las tareas
  const tareas = tareaRepo.obtenerTodas();
  
  // Encuentra la tarea por ID
  const tarea = tareas.find( tarea => tarea.id --- id );
  
  // Si la tarea existe, la marca como completada
  if ( tarea ) {
    tarea.completar();
    
    // Guarda los cambios en el archivo
    tareaRepo.guardar( tareas );
  };
};

// Servicio para eliminar una tarea
export function eliminarTarea( id ) {
  // Obtiene todas las tareas
  let tareas = tareaRepo.obtenerTodas();
  
  // Elimina la tarea que coincida con el ID
  tareas= tareas.filter( tarea => tarea.id !== id );
  
  // Guarda la lista actualizada de tareas
  tareaRepo.guardar( tareas );
};



/*
Explicación teórica de cada función en la capa de servicio


1. listarTareas()

  Función: Servicio para obtener todas las tareas.

  Explicación teórica:
    Este servicio simplemente se encarga de llamar a la capa 
    de persistencia (el repositorio) para obtener la lista 
    completa de tareas almacenadas. No realiza ninguna 
    modificación o procesamiento adicional sobre los datos.

  Flujo:
    • Llama al repositorio para obtener las tareas.
    • Devuelve la lista de tareas tal cual fue obtenida.


2. listarTareasCompletadas()

  Función: Servicio para obtener solo las tareas completadas.

  Explicación teórica:
    Este servicio es responsable de filtrar las tareas que 
    están marcadas como completadas. Primero, obtiene todas 
    las tareas desde la capa de persistencia, y luego aplica 
    un filtro para devolver únicamente aquellas cuyo estado 
    es completado.

  Flujo:
    • Obtiene todas las tareas desde el repositorio.
    • Filtra las tareas que están marcadas como completadas.
    • Devuelve la lista filtrada.


3. crearTarea(id, titulo, descripcion, completado= false)

  Función: Servicio para crear una nueva tarea.

  Explicación teórica:
    Este servicio es responsable de agregar una nueva tarea. 
    Recibe los datos de la nueva tarea desde el controlador 
    y realiza las siguientes acciones:
      • Crea una nueva instancia del modelo Tarea.
      • Valida que la tarea tenga un título (regla de negocio).
      • Añade la tarea a la lista de tareas existentes.
      • Finalmente, guarda la lista actualizada de tareas en la persistencia.

  Flujo:
    • Crea una nueva tarea usando el modelo.
    • Valida que el título de la tarea no esté vacío.
    • Añade la tarea a la lista existente.
    • Guarda las tareas actualizadas en la persistencia.


4. completarTarea( id)

  Función: Servicio para marcar una tarea como completada.

  Explicación teórica:
    Este servicio localiza una tarea en particular por su 
    id y la marca como completada. Llama al repositorio para 
    obtener todas las tareas, encuentra la tarea con el id 
    proporcionado y la actualiza. Luego guarda los cambios en 
    la capa de persistencia.

  Flujo:
    • Busca la tarea por su id en la lista.
    • Marca la tarea como completada.
    • Guarda los cambios en la persistencia.


5. eliminarTarea(id)

  Función: Servicio para eliminar una tarea.

  Explicación teórica:
    Este servicio se encarga de eliminar una tarea específica. 
    Filtra la lista de tareas para eliminar la que coincida 
    con el id proporcionado. Luego, guarda la lista actualizada 
    de tareas en la persistencia.

  Flujo:
    • Filtra las tareas para eliminar la tarea con el id 
      correspondiente.
    • Guarda la lista de tareas actualizada en la persistencia.


Resumen general de la capa de servicio
  En el contexto del patrón MVC:
    • La capa de servicio es responsable de la lógica de negocio. 
      Aquí es donde se toman decisiones, como validar los datos, 
      filtrar listas, o aplicar reglas de negocio (por ejemplo, 
      asegurarse de que una tarea tenga un título antes de ser creada).
    • La capa de servicio no interactúa directamente con los detalles 
      de cómo se almacenan los datos; en su lugar, delega esas 
      responsabilidades a la capa de persistencia (repositorio), 
      lo que permite cambiar la fuente de almacenamiento en el futuro 
      sin afectar la lógica de negocio.
    • El servicio recibe solicitudes del controlador, ejecuta la lógica 
      de negocio necesaria y luego devuelve los resultados al controlador 
      para ser enviados como respuesta al cliente.
*/