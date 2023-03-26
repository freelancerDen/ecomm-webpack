const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const fs = require('fs');


const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

//test db.json
app.get('/data', (req, res) => {

  fs.readFile('./src/db.json', (err, json) => {
    try {
      let obj = JSON.parse(json);
      res.json(obj);
    }  
    catch {
      res.send(err.message);
    }
  });

});

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000! http://localhost:3000\n');
});