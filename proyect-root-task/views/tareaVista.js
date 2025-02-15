/*
2. Vista (View)
  La 'capa de vista' (View) es responsable de la presentación 
  de los datos, formateándolos para su entrega al cliente. En 
  este caso, trabajamos con una API que devuelve los datos en 
  formato JSON, lo que significa que la vista toma los datos 
  procesados por la capa de control y los formatea en JSON 
  antes de enviarlos de vuelta al cliente.

  Esta capa es esencial para:
    1. Separar la lógica de presentación de la lógica de negocio.
    2. Garantizar que los datos se presenten de manera consistente 
       y clara.
    3. Facilitar la reutilización de los métodos de presentación 
       en toda la aplicación.

  Archivo: tareaVista.js (Capa de Vista para las Tareas)
           Este archivo define las funciones necesarias para 
           renderizar las tareas y los mensajes en JSON.
*/


// Función para renderizar una lista de tareas en formato JSON
export function renderizarlistaTareas(tareas) {
  // Formatea el array de tareas en formato JSON con indentación
  return JSON.stringify(tareas, null, 2);
}

// Función para renderizar un mensaje genérico en formato JSON
export function renderizarMensaje(mensaje) {
  // Envuelve un mensaje en formato JSON
  return JSON.stringify({ mensaje }, null, 2);
}

// Función para renderizar una tarea específica en formato JSON
export function renderizarTarea(tarea) {
  // Formatea una tarea individual en formato JSON con indentación
  return JSON.stringify(tarea, null, 2);
}



/*
Explicación del Código
  1.Función renderizarlistaTareas():
      o Toma un array de tareas y lo convierte a formato JSON usando 
      JSON.stringify(), con una indentación de 2 espacios para mejorar 
      la legibilidad. Esta función se utiliza cuando la aplicación 
      necesita devolver una lista de tareas al cliente.
  2. Función renderizarMensaje():
      o Envuelve un mensaje en un objeto JSON y lo formatea con una 
        indentación de 2 espacios. Es ideal para enviar mensajes de éxito, 
        error o cualquier otro tipo de notificación al cliente.
  3.Función renderizarTarea():
      o Convierte una tarea individual en JSON con JSON. st ringi fy() y 
        lo formatea. Esta función se utiliza cuando se necesita devolver 
        una tarea específica, como al completar una tarea o al solicitar 
        una tarea por su ID.

Justificación del Diseño
  1. Modularidad:
      o Cada función es responsable de una tarea específica: formatear 
      listas, tareas individuales o mensajes. Esto sigue el principio de 
      responsabilidad única, lo que hace que el código sea fácil de 
      mantener y reutilizar.
  2. Simplicidad:
      o Las funciones son sencillas y directas, limitándose a formatear 
      los datos en JSON. Esto garantiza que la capa de vista no se involucra 
      en la lógica de negocio y se mantiene enfocada en la presentación.
  3. Consistencia:
      o Al centralizar la lógica de formateo, garantizamos que todas las 
      respuestas sean consistentes en cuanto a su formato, lo cual es 
      crucial en una API.

Conclusión
  La capa de vista (View) es esencial para manejar cómo se presentan los 
  datos a los clientes. Al estructurar la vista de manera que se encargue 
  exclusivamente del formateo en JSON, logramos una arquitectura limpia, 
  modular y fácil de mantener, siguiendo los principios de separación de 
  responsabilidades y modularidad. Esto permite que el resto de la 
  aplicación esté desacoplada de los detalles de presentación, lo que 
  facilita la escalabilidad y mantenibilidad del sistema.
*/