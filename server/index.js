const express = require('express');
const path = require('path');
const app = express();

app.set('port', 8082);

app.use(express.static(path.join(__dirname, '../')));

const server = app.listen(app.get('port'), function() {
  console.log('Sandbox Web started on: ' + app.get('port'));
});