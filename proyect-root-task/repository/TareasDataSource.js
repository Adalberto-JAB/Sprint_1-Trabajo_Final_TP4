/*
5. Capa de Persistencia (Repository)
  La capa de persistencia se encarga de interactuar con el 
  sistema de almacenamiento de datos, ya sea una base de 
  datos o un archivo de texto. En este caso, vamos a 
  implementar una interfaz de persistencia que permita 
  desacoplar el sistema de almacenamiento (por ejemplo, en 
  un futuro, si queremos cambiar de un archivo de texto a 
  una base de datos). Este diseño garantiza que la lógica 
  de la aplicación no dependa de cómo o dónde se almacenan 
  los datos, permitiendo un cambio de base de datos sin 
  modificar el resto del sistema.

  Justificación Teórica
    El diseño de la capa de persistencia con una interfaz 
    sigue el principio de desacoplamiento y responsabilidad 
    única del diseño de software. Esto permite que las otras 
    capas (como la de servicios o controladores) no tengan 
    que conocer los detalles de cómo se gestionan los datos 
    a nivel de persistencia. El desacoplamiento facilita la 
    mantenibilidad y extensibilidad del sistema, ya que si en 
    el futuro se cambia la base de datos (por ejemplo, de 
    archivos a una base de datos relacional), solo se tendrá 
    que modificar o implementar una nueva clase de persistencia, 
    sin afectar a la lógica de negocio o de presentación.

    Diagrama Conceptual de la Capa de Persistencia
      l. Interfaz de Persistencia ( TareasDataSource.mjs ): Define 
        los métodos que cualquier implementación de persistencia 
        debe seguir, asegurando que cualquier fuente de datos 
        (archivos, base de datos, etc.) mantenga la misma interfaz 
        de comunicación.

      2. Implementación Concreta ( TareaRepository.mjs ): Implementa 
      la interfaz para manejar la persistencia usando un archivo de 
      texto. En un futuro, podríamos crear otra clase (por ejemplo, 
      TareaDatabaseRepository) que implemente esta misma interfaz 
      pero utilizando una base de datos.

  Archivo 1: TareasDataSource.js (Interfaz de Persistencia)
    Este archivo define una interfaz de persistencia que cualquier 
    implementación concreta debe seguir. Esto asegura que las 
    funciones de persistencia sigan un contrato común, permitiendo 
    cambiar el sistema de almacenamiento sin afectar al resto de 
    la aplicación.
*/


// Definimos una clase abstracta que actúa como interfaz para la persistencia de datos
export default class TareasDataSource {
  // Método abstracto para obtener todas las tareas
  obtenerTodas() {
    throw new Error('Este método debe ser implementado por la subclase');
  };

  // Método abstracto para guardar todas las tareas
  guardar(tareas) {
    throw new Error('Este método debe ser implementado por la subclase');
  };

  // Método abstracto para eliminar una tarea por su ID
  eliminar(id) {
    throw new Error('Este método debe ser implementado por la subclase');
  };
};


/*

*/
