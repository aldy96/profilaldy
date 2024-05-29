/*
  Include express and passport packages.
*/
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json())
/*
  Database connection -- We are using MongoDB for this tutorial
*/
require('./passport/passport')(app)

require('./routes/auth')(app)

app.listen(5000, () => { console.log('Server started.') });




