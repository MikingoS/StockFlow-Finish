const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// 1. Aquí la magia: Le decimos que la carpeta estática es "public"
const middlewares = jsonServer.defaults({ static: path.join(__dirname, 'public') });

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});