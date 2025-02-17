/*
3. Controlador

El Controlador maneja las solicitudes HTTP y utiliza la 
capa de servicio para obtener los datos necesarios.

controllers/superheroesController.mjs
*/

import { 
  obtenerSuperheroesPorID, 
  buscarSuperheroesPorAtributo, 
  obtenerSuperheroesMayoresDe30 
} from '../services/superheroesService.js';

import { 
  renderizarSuperheroe, 
  renderizarlistaSuperheroes
} from ' .. /views/responseView.js';

export function obtenerSuperheroesPorIDController( req, res ) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroesPorID(parseInt(id));

  if ( superheroe ) {
    res.send(renderizarSuperheroe( superheroe ));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  };
};

export function buscarSuperheroesPorAtributoController ( req, res ) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo( atributo, valor );

  if ( superheroes.length > 0 ) {
    res.send( renderizarlistaSuperheroes( superheroes ));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo"});
  };
};

export function obtenerSuperheroesMayoresDe30Controller( req, res ) {
  const superheroes = obtenerSuperheroesMayoresDe();
  if ( superheroes.length > 0 ) {
    res.send( renderizarlistaSuperheroes( superheroes ));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superhéroes"});
  };
};

