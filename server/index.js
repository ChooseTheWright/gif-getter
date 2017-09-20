const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const gc = require('./controllers/gif_controllers.js');

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.json());

const baseUrl = "/api/gifs"

app.post(baseUrl, gc.addGif);
app.get(baseUrl, gc.getAll);
app.put(`${baseUrl}/:id/:gifStatus`, gc.updateGif);
app.delete(baseUrl, gc.deleteAllGifs);

const port = 3200;
app.listen(port, () => {
  console.log("I am listening");
})
