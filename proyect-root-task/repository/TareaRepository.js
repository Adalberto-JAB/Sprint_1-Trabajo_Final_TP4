/*
Archivo 2: TareaRepository.js (Implementación de Persistencia 
usando Archivos de Texto)
  Este archivo contiene la implementación concreta que utiliza 
  archivos de texto (tareas.txt) para almacenar y recuperar las 
  tareas. Esta clase extiende la interfaz TareasDataSource, lo 
  que asegura que cumple con el contrato definido en la interfaz.
*/


import fs from 'fs' ; // Importamos el módulo del sistema de archivos de Node.js
import path from 'path'; // Módulo para manejar rutas de archivos
import { fileURLToPath } from 'url'; // Para obtener la ruta del archivo actual

// Importamos la interfaz de persistencia
import TareasDataSource from './TareasDataSource.mjs';
import Tarea from '../models/tarea.mjs'; // Importamos el modelo Tarea


//Obtenerla ruta del archivo de tareas
const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );
const filePath = path.join( __dirname, '.. /tareas.txt' );

// Implementación concreta que extiende la interfaz TareasDataSource
export default class TareaRepository extends TareasDataSource {
  constructor() {
    super(); // Llamada al constructor de la clase base
  };

  // Implementación del método obtenerTodas()
  obtenerTodas() {
    try {
      // Leer el archivo de texto en formato UTF-8
      const data= fs.readFileSync(filePath, 'utf-8');
      
      // Convertir el contenido del archivo en un array de objetos JSON
      const tareas= JSON.parse(data);
      
      // Convertir cada tarea en una instancia de la clase Tarea
      return tareas.map(tareaData => new Tarea(
        tareaData.id,
        tareaData.titulo,
        tareaData.descripcion,
        tareaData.completado
      ));
    } catch (error) {
      // Si ocurre un error, como que el archivo no exista, devolvemos un array vacío
      console.error('Error al leer el archivo de tareas:', error);
      return [];
    };
  };

  // Implementación del método guardar()
  guardar(tareas) {
    try {
      // Convertimos el array de tareas a una cadena JSON con indentación de 2 espacios
      const data= JSON.stringify(tareas, null, 2);
      
      //Guardarla cadena JSON en el archivo de texto
      fs.writeFileSync(filePath, data, 'utf-8' );
    } catch (error) {
      // Si ocurre un error al guardar los datos, mostramos el error
      console.error('Error al guardar las tareas:', error);
    };
  };

  // Implementación del método eliminar()
  eliminar(id) {
    try {
      // Obtener todas las tareas existentes
      const tareas= this.obtenerTodas(); 

      // Filtrar la tarea por ID
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);

      //Guardarla lista actualizada
      this.guardar(tareasActualizadas); 
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    };
  };
};



/*
Explicación del Código:

  1. Clase TareaRepository:
    o Extiende la interfaz TareasDataSource: Implementa los métodos 
      abstractos definidos en la interfaz, lo que asegura que la 
      clase sigue el contrato para manejar las tareas.
    o Manejo de archivos: Utiliza el módulo f s de Node.js para leer 
      y escribir en el archivo 'tareas.txt'.


  2. Método obtenerTodas():
    o Primero, deserializamos el archivo de texto utilizando 'JS0N.parse()' 
      para convertirlo en un array de objetos planos.
    o Después, recorremos cada objeto deserializado y lo reconstruimos 
      utilizando el constructor de la clase Ta rea . De esta manera, 
      garantizamos que las instancias resultantes no solo contengan los 
      datos, sino que también tengan acceso a los métodos de la clase Tarea 
      (como completar() y validar()).
    o El método devuelve un array de objetos Tarea.


  3. Método guardar():
    o Función: Convierte el array de tareas en una cadena JSON usando 
      'JS0N.stringify()' y guarda los datos en el archivo 'tareas.txt'.
    o Manejo de errores: Si ocurre un error durante la escritura, este 
      se captura y se muestra en la consola.


  4. Método eliminar(id):
    o Función: Filtra el array de tareas para eliminar la tarea que 
      coincide con el id proporcionado. Luego, guarda el array 
      actualizado en el archivo.
    o Manejo de errores: Captura cualquier error al eliminar una tarea 
      y lo muestra en la consola. 
      
      
Justificación del Diseño
  1. Desacoplamiento con la Interfaz:
    o Al utilizar una interfaz de persistencia ( TareasDataSource ), 
      desacoplamos la lógica de negocio de los detalles de cómo se 
      almacenan los datos. Si en el futuro queremos cambiar de un 
      archivo de texto a una base de datos (por ejemplo, PostgreSQL, 
      MySQL o MongoDB), solo necesitamos crear una nueva clase (como 
      TareaDatabaseRepository) que implemente la misma interfaz. Esto 
      asegura que la lógica de la aplicación permanezca inalterada.

  2. Principio de Responsabilidad Única (SRP):
    o La clase Ta reaReposito ry tiene una responsabilidad única: manejar 
      la persistencia de las tareas utilizando archivos de texto. Esto 
      sigue el Principio de Responsabilidad Única (Single Responsibility 
      Principie), uno de los principios fundamentales del diseño de software. 
      Al delegar esta responsabilidad en una clase independiente, el código 
      se vuelve más modular y fácil de mantener.

  3. Escalabilidad:
    o Si en el futuro decides cambiar la base de datos, solo necesitas 
      implementar una nueva clase que extienda la interfaz TareasDataSource. 
      Esto hace que el sistema sea escalable y flexible sin afectar el 
      código existente en la capa de servicios o controladores.

  4. Facilidad de mantenimiento:
    o Gracias a la abstracción proporcionada por la interfaz, podemos 
      actualizar o cambiar la implementación de la persistencia sin alterar 
      la lógica de la aplicación, lo que reduce el riesgo de errores y hace 
      que el sistema sea más fácil de mantener.


Conclusión
  Esta capa de persistencia es altamente modular y flexible, gracias a la 
  interfaz TareasDataSource, que define el contrato que cualquier fuente 
  de persistencia debe seguir. El uso de esta interfaz asegura que la 
  aplicación pueda cambiar de sistema de almacenamiento (por ejemplo, de un 
  archivo de texto a una base de datos) sin afectar a la lógica de negocio 
  o de presentación. Además, la implementación concreta que usa archivos de 
  texto (TareaRepository) es fácil de mantener y permite un manejo robusto 
  de errores, lo que hace que el sistema sea más tolerante a fallos.
*/