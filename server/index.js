const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});