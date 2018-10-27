'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./db/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the express app
var app = (0, _express2.default)();
//body parser
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
// expression api
app.post('/calc', function (req, res) {

  if (req.body.expression) {
    console.log(req.body);
    //saving calculation
    var calculation = {
      id: _db2.default.length + 1,
      expression: req.body.expression,
      result: eval(req.body.expression)
    };
    _db2.default.push(calculation);
    //sending success resposne with history
    res.status(200).send({
      success: 'true',
      message: 'Calculation done successfully',
      result: eval(req.body.expression),
      history: _db2.default
    });
  } else {
    res.status(200).send({
      success: 'false',
      message: 'No expression provided'
    });
  }
});

var PORT = 5000;
app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});