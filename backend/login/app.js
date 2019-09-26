var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const PORT = 3000;
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
   res.json({
       "API Name": "Login API Domotec",
       "status": "enable"
   })
});

app.listen(PORT, ()=>{
   console.log('Login API Domotec START AT ' + PORT);
});