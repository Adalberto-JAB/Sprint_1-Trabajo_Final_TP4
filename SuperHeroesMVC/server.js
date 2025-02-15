import express from 'express';

const app = express();
const port = 3005;

// Ruta GET que recibe un ID como parámetro
// app.get('/superheroes/id/:id', ...);

app.listen(port, () => {
  console.log(`Servidor corriendo y escuchando en el puerto ${port}`);
});

