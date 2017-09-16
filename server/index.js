var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


var port = 3005;
app.listen(port, () => {
  console.log("I am listening");
})
