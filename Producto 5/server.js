const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: "Servidor de Facturación en ejecución" }));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});