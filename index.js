var express = require('express');
var bodyParser = require('body-parser');

var treesController = require('./controllers/trees_controller');

var app = express();

app.use(bodyParser.json());

app.get('/trees', treesController.index);
app.get('/trees/:id', treesController.show);
app.post('/trees', treesController.create);
app.put('/trees/:id', treesController.update);
app.delete('/trees/:id', treesController.destroy);

app.listen(3000, function () {
  console.log('listening');
});
