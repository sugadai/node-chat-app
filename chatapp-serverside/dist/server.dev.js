"use strict";

var express = require('express');

var app = express();

var dotenv = require('dotenv').config(); // const cors = require('cors');


var PORT = process.env.PORT || 4000; // app.use(cors());

app.get('/', function (req, res) {
  console.log('test');
});
app.get('/:api', function (req, res) {
  var api = req.params.api;
  console.log(api); //    const msg={data : `エンドポイント${api}にリクエストが来ました。`};
  //    const data = JSON.parse(api)
  //    console.log(typeof data)

  res.send({
    apiname: api
  });
});
app.listen(PORT, console.log("Server Running on port Number ".concat(PORT, " !")));
//# sourceMappingURL=server.dev.js.map
