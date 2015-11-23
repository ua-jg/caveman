const express = require('express');
const bodyParser = require('body-parser');

const data = require('./venues.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const updates = {};

app.get('/api/venues', (req, res) => {
  res.json(data.map(d => Object.assign({}, d, updates[d.id] || {})));
});

app.put('/api/venues/:id', (req, res) => {
  updates[req.params.id] = Object.assign({}, updates[req.params.id] || {}, req.body);
  res.json({ ok: true });
});

const server = app.listen(3042, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Backend is running at http://%s:%s', host, port);
});
