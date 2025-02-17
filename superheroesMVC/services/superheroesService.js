/*
2. Capa de Servicio

La "Capa de Servicio" contiene la lógica de negocio para 
las diversas solicitudes. Interactúa con la capa de
persistencia para obtener los datos.

services/suerheroesServices.js
*/

import SuperheroesRepository from "../repository/superheroesRepository"

const repository = new SuperheroesRepository();

export function obtenerSuperheroesPorID(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find( hero => hero.id === id );
};

export function buscarSuperheroesPorAtributo( atributo, valor ) {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter( hero => 
    String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
  );
};

export function obtenerSuperheroesMayoresDe30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter( hero => 
    hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >=2
  );
};

