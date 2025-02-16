/*
Implementación de la Persistencia con Archivos

Esta clase implementa el método "obtenerTodos()" 
que lee los datos desde "superheroes.txt".

repository/superheroesRepository.js
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.js';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

export default class SuperheroesRepository extends SuperheroesDataSource {
  constructor() {
    super();
    this.filePath = path.join( __dirname, '../superheroes.txt' );
  };

  obtenerTodos() {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data); // convierte el archivo JSON en un array de objetos js
  };
};