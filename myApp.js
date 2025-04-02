let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Rutas de ejemplo\
app.post('/name', (req, res) => {
  const { first, last } = req.body;
  if (!first || !last) {
    return res.status(400).json({ error: 'Missing first or last name' });
}
res.json({ name: `${first} ${last}` });
});

module.exports = app;