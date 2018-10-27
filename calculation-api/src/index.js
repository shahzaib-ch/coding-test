import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';
// Set up the express app
const app = express();
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// expression api
app.post('/calc', (req, res) => {

  if(req.body.expression){
    console.log(req.body);
    //saving calculation
    const calculation = {
      id: db.length + 1,
      expression: req.body.expression,
      result: eval(req.body.expression),
    }
    db.push(calculation)
    //sending success resposne with history
    res.status(200).send({
      success: 'true',
      message: 'Calculation done successfully',
      result: eval(req.body.expression),
      history: db,
    })
  }else {
    res.status(200).send({
      success: 'false',
      message: 'No expression provided',
    })
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
