import express from 'express';

const app = express();
const port = 3005;

// Recibe un ID de superhéroe y devuelve los datos de ese 
// superhéroe o un mensaje si no fue encontrado
// app.get('/superheroes/id/:id', ...);

// Recibe un atributo (por ejemplo, nombre o poder) y devuelve 
// una lista de superhéroes que cumplen con ese criterio.
// app.get('/superheroes/atributo/:atributo/:valor', ...);

// Devuelve una lista de superhéroes mayores de 30 años que 
// además sean del planeta Tierra y tengan al menos 2 poderes.
// app.get('/superheroes/edad/mayorA30:', ...);


app.listen(port, () => {
  console.log(`Servidor corriendo y escuchando en el puerto ${port}`);
});

