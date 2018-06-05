const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const port = 8021;
const connectionString = "postgres://@localhost/gifs"; 
const app = module.exports = express();
let db;

app.use(bodyParser.json());
app.use(cors());

massive(connectionString)
  .then(massiveInstance => {
    app.set('db', massiveInstance);
    app.listen(port, () => console.log('listening on port ', port));

    db = app.get('db');
  })
  .catch(err => console.log('There was an error! ', err))

app.get('/gifs', (req, res) => {
  db.get_gifs().then((tests, err) => {
    if (!err) res.status(200).send(tests);
    else res.status(422).send(err);
  })
});

app.post('/gifs', (req, res) => {
  const { gif_name, id, gif_url } = req.body;
  db.add_gif([id, gif_name, gif_url])
    .then((response) => {
    db.get_gifs().then((tests, err) => {
      if (!err) res.status(200).send(tests);
      else res.status(422).send(err);
    });
  })
});

