const http = require('http');

// Configura el puerto del servidor
const PORT = 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Servidor básico de Node.js funcionando!\n');
});

// El servidor escucha en el puerto definido
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
