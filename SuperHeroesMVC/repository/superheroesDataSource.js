/*
1. Capa de Persistencia

Abstracción de la Persistencia

Este archivo define una abstracción que otras clases de 
persistencia deben implementar:

repository/superheroesDataSource.js
*/

export default class SuperheroesDataSource {
  // Método abstracto para obtener los superhéroes
  obtenerTodos() {
    throw new Error('Este método debe ser implementado por la subclase.');
  }
};

