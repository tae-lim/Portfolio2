const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});