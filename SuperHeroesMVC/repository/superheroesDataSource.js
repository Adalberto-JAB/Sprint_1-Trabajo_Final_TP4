// repository/superheroesDataSource.js

export default class SuperheroesDataSource {
  // Método abstracto para obtener los superhéroes
  obtenerTodos() {
    throw new Error('Este método debe ser implementado por la subclase.');
  }
};

