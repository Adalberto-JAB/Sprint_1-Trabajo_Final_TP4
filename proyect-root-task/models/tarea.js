export default class Tarea {
  constructor(id, titulo, descripcion, completado = false) {
    this.id = id; // Identificador único de la tarea
    this.titulo = titulo; // Título de la tarea - dato obligatorio
    this.descripcion = descripcion; // Descripción de la tarea
    this.completado = completado; // Estado de completado, por defecto es false
  }
  // Método para marcar una tarea como completada
  completar() {
    this.completado = true; // Cambia el estado de completado a true
  }
  // Método para validar que el título de la tarea no esté vacío
  validar() {
    if (!this.titulo || this.titulo.trim() === "") {
      throw new Error("El título de la tarea es obligatorio.");
    }
  }
}

/*
Explicación del Código
  1. Clase Tarea:
      o La Clase Tarea es el modelo que encapsula los atributos de una 'tarea' y sus métodos para
        interactuar con ellos.
      o Atributos:
        ■ id          : Representa un identificador único para cada tarea.
        ■ titulo      : El nombre o título que describe la tarea.
        ■ descripcion : Detalle adicional que describe la tarea.
        ■ completado  : Un estado booleano que indica si la tarea ha sido completada o no. 
                        Por defecto, se inicializa en false.
  2. Método completar():
      o Este método cambia el estado de la tarea a completada (true). 
        Al llamar a este método, podemos marcar una tarea como terminada.
  3. Método validar():
      o Este método se asegura de que la tarea tenga un título válido. 
        Si el título está vacío o consiste solo en espacios, lanza un 
        error con un mensaje que indica que el título es obligatorio. 
        Esta validación ayuda a evitar que se creen tareas sin información necesaria.

Justificación del Diseño
  1. Responsabilidad Única:
      o La clase Ta rea sigue el Principio de Responsabilidad Única (SRP) al enfocarse 
        únicamente en la representación y manipulación de los datos relacionados con una tarea. 
        Encapsula tanto los atributos como los métodos que pueden operar sobre ellos.
  2. Simplicidad:
      o Este diseño es simple y directo. Al no usar una interfaz intermedia, el modelo 
        'Tarea' es utilizado directamente por la capa de servicios, lo que simplifica la 
        arquitectura y reduce la sobrecarga de código.
  3. Modularidad:
      o Aunque es un diseño simple, el modelo sigue siendo modular. Las funciones 
        relacionadas con la validación y la manipulación de los datos de la tarea 
        están encapsuladas dentro de la Clase Tarea, lo que facilita su reutilización 
        y mantenimiento.
  4. Validación Interna:
      o El método validar () asegura que los datos sean consistentes antes de que 
        la tarea sea procesada o guardada. Esto agrega una capa de robustez al sistema, 
        evitando que tareas incompletas o incorrectas se almacenen o procesen.

Conclusión
  La capa de modelo (Model) es crucial para representar y manejar los datos dentro de 
  la aplicación. En este caso, el modelo Ta rea encapsula los atributos y la lógica 
  necesaria para manipular las tareas, como marcar una tarea como completada o validar 
  sus atributos. Al mantener el modelo sencillo y directo, podemos lograr un diseño 
  modular, fácil de mantener y lo suficientemente flexible para futuras expansiones.
  Este enfoque de interactuar directamente con el modelo simplifica el sistema al no 
  usar interfaces innecesarias para este nivel de abstracción, lo que facilita el 
  desarrollo y la mantenibilidad del código sin sacrificar flexibilidad o robustez.
*/