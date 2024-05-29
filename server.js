/*
  Include express and passport packages.
*/
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();



app.use(cors({ 	credentials: true, 	origin: "http://localhost:3000" }))
app.use(bodyParser.json())
/*
  Database connection -- We are using MongoDB for this tutorial
*/
require('./passport/passport')(app)

require('./routes/auth')(app)

app.listen(5000, () => { console.log('Server started.') });




