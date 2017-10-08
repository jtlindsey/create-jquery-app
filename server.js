const express = require('express');
const webpack = require('webpack');
const app = express();

app.use(express.static(__dirname + '/build'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});

const port = 3000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});