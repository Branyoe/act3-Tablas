const express = require('express');
const app = express();
const port = process.env.PORT || 3000
// const routes = require('./src/routes')
app.use(express.static("./public"));

// app.use('/', routes);
console.log(__dirname);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/tablas-paises', (req, res) => {
  res.sendFile(__dirname + '/public/paises.html');
});

app.get('/boleta-de-calificaciones', (req, res) => {
  res.sendFile(__dirname + '/public/boleta.html');
});

app.listen(port, () => {
  console.log('server on port 3000');
});