/*
5.b
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



