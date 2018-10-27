'use strict';

var _consts = require('./consts');

_consts.app.get('/', function (req, res) {
  res.send('Hello world node.js es6 app.');
});