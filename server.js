const express = require('express');
const webpack = require('webpack');
const app = express();

app.use(express.static(__dirname + '/build'));

const port = 3000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});